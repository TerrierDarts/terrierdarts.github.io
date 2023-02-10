declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"docs": {
"en/death_counter_multi_game.md": {
  id: "en/death_counter_multi_game.md",
  slug: "en/death_counter_multi_game",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/follow_age_responses.md": {
  id: "en/follow_age_responses.md",
  slug: "en/follow_age_responses",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/heat_click_map.md": {
  id: "en/heat_click_map.md",
  slug: "en/heat_click_map",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/heat_core_ws5.md": {
  id: "en/heat_core_ws5.md",
  slug: "en/heat_core_ws5",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/heat_mario.mdx": {
  id: "en/heat_mario.mdx",
  slug: "en/heat_mario",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/heat_offline_test.md": {
  id: "en/heat_offline_test.md",
  slug: "en/heat_offline_test",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/home.md": {
  id: "en/home.md",
  slug: "en/home",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/welcome_users.md": {
  id: "en/welcome_users.md",
  slug: "en/welcome_users",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
