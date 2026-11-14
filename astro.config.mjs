// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectDir = path.dirname(fileURLToPath(import.meta.url));

// Map each route to its primary source page (.astro/.md) and associated content/translation files
const routeFilesMap = {
	'/': ['src/pages/index.astro'],
	'/50-30-20-budget/': ['src/pages/50-30-20-budget.astro'],
	'/about/': ['src/pages/about.astro'],
	'/budget-planner-template/': ['src/pages/budget-planner-template.astro', 'src/data/templatesData.ts'],
	'/budget-planner/': ['src/pages/budget-planner.astro'],
	'/budget-templates/': ['src/pages/budget-templates.astro', 'src/data/templatesData.ts'],
	'/contact/': ['src/pages/contact.astro'],
	'/learn/': ['src/pages/learn/index.astro', 'src/data/learnArticles.ts'],
	'/learn/50-30-20-budget-explained/': ['src/pages/learn/50-30-20-budget-explained.astro', 'src/data/learnArticleContent.ts'],
	'/learn/50-30-20-vs-zero-based-budget/': ['src/pages/learn/50-30-20-vs-zero-based-budget.astro', 'src/data/learnArticleContent.ts'],
	'/learn/how-to-create-a-monthly-budget/': ['src/pages/learn/how-to-create-a-monthly-budget.astro', 'src/data/learnArticleContent.ts'],
	'/learn/what-is-a-budget/': ['src/pages/learn/what-is-a-budget.astro', 'src/data/learnArticleContent.ts'],
	'/learn/zero-based-budget-explained/': ['src/pages/learn/zero-based-budget-explained.astro', 'src/data/learnArticleContent.ts'],
	'/privacy/': ['src/pages/privacy.astro'],
	'/terms/': ['src/pages/terms.astro'],
	'/zero-based-budget/': ['src/pages/zero-based-budget.astro'],
	'/zh/': ['src/pages/zh/index.astro', 'src/data/editorialTranslations.ts'],
	'/zh/50-30-20-budget/': ['src/pages/zh/50-30-20-budget.astro', 'src/data/editorialTranslations.ts'],
	'/zh/budget-planner/': ['src/pages/zh/budget-planner.astro', 'src/data/editorialTranslations.ts'],
	'/zh/templates/': ['src/pages/zh/templates.astro', 'src/data/templatesTranslations.ts'],
	'/zh/zero-based-budget/': ['src/pages/zh/zero-based-budget.astro', 'src/data/editorialTranslations.ts'],
	'/zh-hant/': ['src/pages/zh-hant/index.astro', 'src/data/editorialTranslations.ts'],
	'/zh-hant/50-30-20-budget/': ['src/pages/zh-hant/50-30-20-budget.astro', 'src/data/editorialTranslations.ts'],
	'/zh-hant/budget-planner/': ['src/pages/zh-hant/budget-planner.astro', 'src/data/editorialTranslations.ts'],
	'/zh-hant/templates/': ['src/pages/zh-hant/templates.astro', 'src/data/templatesTranslations.ts'],
	'/zh-hant/zero-based-budget/': ['src/pages/zh-hant/zero-based-budget.astro', 'src/data/editorialTranslations.ts'],
};

// Load manual fallback map from src/data/lastmod.json
let lastmodFallback = {};
try {
	const lastmodPath = path.resolve(projectDir, 'src/data/lastmod.json');
	if (fs.existsSync(lastmodPath)) {
		lastmodFallback = JSON.parse(fs.readFileSync(lastmodPath, 'utf-8'));
	}
} catch (e) {
	console.warn('[sitemap] Warning: Could not read src/data/lastmod.json:', e.message);
}

let gitHistoryChecked = false;
function ensureFullGitHistory() {
	if (gitHistoryChecked) return;
	gitHistoryChecked = true;
	try {
		const isShallow = execSync('git rev-parse --is-shallow-repository', {
			cwd: projectDir,
			encoding: 'utf-8',
			stdio: ['ignore', 'pipe', 'ignore'],
		}).trim() === 'true';

		if (isShallow) {
			console.log('[sitemap] Shallow git clone detected. Fetching full git history with git fetch --unshallow...');
			execSync('git fetch --unshallow', {
				cwd: projectDir,
				encoding: 'utf-8',
				stdio: ['ignore', 'pipe', 'ignore'],
			});
			console.log('[sitemap] Successfully fetched full git history.');
		}
	} catch {
		// Ignore if unshallow is not supported in the current environment
	}
}

const lastmodCache = new Map();

function getRouteLastmod(url) {
	try {
		ensureFullGitHistory();

		const parsed = new URL(url);
		let pathname = parsed.pathname;
		if (!pathname.endsWith('/')) {
			pathname += '/';
		}
		if (lastmodCache.has(pathname)) return lastmodCache.get(pathname);

		let resolvedDate = null;
		const isChinese = pathname.startsWith('/zh/') || pathname.startsWith('/zh-hant/');

		if (isChinese) {
			// Chinese pages: always use the corresponding date from src/data/lastmod.json
			if (lastmodFallback) {
				const fallbackRaw = lastmodFallback[url] || lastmodFallback[pathname] || lastmodFallback[pathname.replace(/\/$/, '')];
				if (fallbackRaw) {
					const parsedDate = new Date(fallbackRaw);
					if (!isNaN(parsedDate.getTime())) {
						resolvedDate = parsedDate.toISOString();
					}
				}
			}
		} else {
			// Non-Chinese pages: Git history first, fallback-map second
			const files = routeFilesMap[pathname];
			if (files && files.length > 0) {
				const existingFiles = files.filter((f) => fs.existsSync(path.resolve(projectDir, f)));
				if (existingFiles.length > 0) {
					try {
						const quoted = existingFiles.map((f) => `"${f.replace(/\\/g, '/')}"`).join(' ');
						const gitDate = execSync(`git log -1 --format="%cI" -- ${quoted}`, {
							cwd: projectDir,
							encoding: 'utf-8',
							stdio: ['ignore', 'pipe', 'ignore'],
						}).trim();
						if (gitDate) {
							const parsedDate = new Date(gitDate);
							if (!isNaN(parsedDate.getTime())) {
								resolvedDate = parsedDate.toISOString();
							}
						}
					} catch {
						// Git history query failed, proceed to fallback
					}
				}
			}

			// If Git history is unavailable, use manual lastmod.json fallback
			if (!resolvedDate && lastmodFallback) {
				const fallbackRaw = lastmodFallback[url] || lastmodFallback[pathname] || lastmodFallback[pathname.replace(/\/$/, '')];
				if (fallbackRaw) {
					const parsedDate = new Date(fallbackRaw);
					if (!isNaN(parsedDate.getTime())) {
						resolvedDate = parsedDate.toISOString();
					}
				}
			}
		}

		// 3. If neither source has a valid date, log a warning (never use build timestamp)
		if (!resolvedDate) {
			console.warn(`[sitemap] Warning: No valid lastmod date found for ${url} from Git or lastmod.json.`);
		} else {
			lastmodCache.set(pathname, resolvedDate);
		}

		return resolvedDate || undefined;
	} catch (e) {
		console.warn(`[sitemap] Error resolving lastmod for ${url}:`, e);
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
