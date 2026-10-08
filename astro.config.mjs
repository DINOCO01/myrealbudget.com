// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

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
				if (item.url === 'https://myrealbudget.com/' || item.url === 'https://myrealbudget.com/zh/') {
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
