import { defineCollection, z } from 'astro:content';
import { SITE } from '../consts';

const docs = defineCollection({
	schema: z.object({
		title: z.string().default(SITE.title),
		description: z.string().default(SITE.description),
		lang: z.literal('en-us').default(SITE.defaultLanguage),
		code: z.string().optional(),
		pubDate: z.string().optional(),
		setUpDifficulty: z.string().optional(),
		sbRequiredV: z.string().optional(),
		heroImage: z.string().optional(),
		youTubeLink: z.string().optional(),
		twitch: z.boolean().optional(),
		youtube: z.boolean().optional(),
		dir: z.union([z.literal('ltr'), z.literal('rtl')]).default('ltr'),
		image: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional(),
		ogLocale: z.string().optional(),
	}),
});

export const collections = { docs };