// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectDir = path.dirname(fileURLToPath(import.meta.url));

const routeToFileMap = {
	'/': 'src/pages/index.astro',
	'/50-30-20-budget/': 'src/pages/50-30-20-budget.astro',
	'/about/': 'src/pages/about.astro',
	'/budget-planner-template/': 'src/pages/budget-planner-template.astro',
	'/budget-planner/': 'src/pages/budget-planner.astro',
	'/budget-templates/': 'src/pages/budget-templates.astro',
	'/contact/': 'src/pages/contact.astro',
	'/learn/': 'src/pages/learn/index.astro',
	'/learn/50-30-20-budget-explained/': 'src/pages/learn/50-30-20-budget-explained.astro',
	'/learn/50-30-20-vs-zero-based-budget/': 'src/pages/learn/50-30-20-vs-zero-based-budget.astro',
	'/learn/how-to-create-a-monthly-budget/': 'src/pages/learn/how-to-create-a-monthly-budget.astro',
	'/learn/what-is-a-budget/': 'src/pages/learn/what-is-a-budget.astro',
	'/learn/zero-based-budget-explained/': 'src/pages/learn/zero-based-budget-explained.astro',
	'/privacy/': 'src/pages/privacy.astro',
	'/terms/': 'src/pages/terms.astro',
	'/zero-based-budget/': 'src/pages/zero-based-budget.astro',
	'/zh/': 'src/pages/zh/index.astro',
	'/zh/50-30-20-budget/': 'src/pages/zh/50-30-20-budget.astro',
	'/zh/budget-planner/': 'src/pages/zh/budget-planner.astro',
	'/zh/templates/': 'src/pages/zh/templates.astro',
	'/zh/zero-based-budget/': 'src/pages/zh/zero-based-budget.astro',
	'/zh-hant/': 'src/pages/zh-hant/index.astro',
	'/zh-hant/50-30-20-budget/': 'src/pages/zh-hant/50-30-20-budget.astro',
	'/zh-hant/budget-planner/': 'src/pages/zh-hant/budget-planner.astro',
	'/zh-hant/templates/': 'src/pages/zh-hant/templates.astro',
	'/zh-hant/zero-based-budget/': 'src/pages/zh-hant/zero-based-budget.astro',
};

const lastmodCache = new Map();

function getRouteLastmod(url) {
	try {
		const parsed = new URL(url);
		let pathname = parsed.pathname;
		if (!pathname.endsWith('/')) {
			pathname += '/';
		}
		const relFile = routeToFileMap[pathname];
		if (!relFile) return undefined;
		if (lastmodCache.has(relFile)) return lastmodCache.get(relFile);

		const fullPath = path.resolve(projectDir, relFile);
		if (!fs.existsSync(fullPath)) return undefined;

		let isDirty = false;
		try {
			const status = execSync(`git status --porcelain -- "${relFile}"`, {
				cwd: projectDir,
				encoding: 'utf-8',
				stdio: ['ignore', 'pipe', 'ignore'],
			}).trim();
			if (status) isDirty = true;
		} catch {
			// ignore git status error
		}

		if (isDirty) {
			const mtime = fs.statSync(fullPath).mtime.toISOString();
			lastmodCache.set(relFile, mtime);
			return mtime;
		}

		try {
			const gitDate = execSync(`git log -1 --format="%cI" -- "${relFile}"`, {
				cwd: projectDir,
				encoding: 'utf-8',
				stdio: ['ignore', 'pipe', 'ignore'],
			}).trim();
			if (gitDate) {
				lastmodCache.set(relFile, gitDate);
				return gitDate;
			}
		} catch {
			// ignore git log error
		}

		const mtime = fs.statSync(fullPath).mtime.toISOString();
		lastmodCache.set(relFile, mtime);
		return mtime;
	} catch {
		return undefined;
	}
}

// https://astro.build/config
export default defineConfig({
	site: 'https://myrealbudget.com',
	trailingSlash: 'always',
	integrations: [
		sitemap({
			filter: (page) =>
				!page.includes('/404') &&
				!page.includes('/500') &&
				!page.includes('/about-us') &&
				!page.includes('/contact-us') &&
				!page.includes('/privacy-policy') &&
				!page.includes('/terms-and-conditions'),
			serialize(item) {
				const lastmod = getRouteLastmod(item.url);
				if (lastmod) {
					item.lastmod = lastmod;
				}

				if (item.url === 'https://myrealbudget.com/' || item.url === 'https://myrealbudget.com/zh/' || item.url === 'https://myrealbudget.com/zh-hant/') {
					item.changefreq = ChangeFreqEnum.WEEKLY;
					item.priority = 1.0;
				} else if (
					item.url.includes('/budget-planner/') ||
					item.url.includes('/50-30-20-budget/') ||
					item.url.includes('/zero-based-budget/')
				) {
					item.changefreq = ChangeFreqEnum.WEEKLY;
					item.priority = 0.9;
				} else if (item.url.includes('template')) {
					item.changefreq = ChangeFreqEnum.MONTHLY;
					item.priority = 0.8;
				} else if (item.url.includes('/learn/')) {
					item.changefreq = item.url === 'https://myrealbudget.com/learn/' ? ChangeFreqEnum.WEEKLY : ChangeFreqEnum.MONTHLY;
					item.priority = item.url === 'https://myrealbudget.com/learn/' ? 0.8 : 0.7;
				} else {
					item.changefreq = ChangeFreqEnum.MONTHLY;
					item.priority = 0.6;
				}
				return item;
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});

