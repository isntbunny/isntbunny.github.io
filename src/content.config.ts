import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

function removeDupsAndLowerCase(array: string[]) {
	return [...new Set(array.map((str) => str.toLowerCase()))];
}

function removeDups(array: string[]) {
	return [...new Set(array.map((str) => str.trim()).filter(Boolean))];
}

const titleSchema = z.string().max(60);

const baseSchema = z.object({
	title: titleSchema,
});

const post = defineCollection({
	loader: glob({ base: "./src/content/post", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		baseSchema.extend({
			description: z.string(),
			coverImage: z
				.object({
					alt: z.string(),
					src: image(),
				})
				.optional(),
			draft: z.boolean().default(false),
			ogImage: z.string().optional(),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			pinned: z.boolean().default(false),
		}),
});


const tag = defineCollection({
	loader: glob({ base: "./src/content/tag", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: titleSchema.optional(),
		description: z.string().optional(),
	}),
});

const gallery = defineCollection({
	loader: glob({ base: "./src/content/gallery", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		sections: z.array(
			z.object({
				slug: z.string(),
				title: z.string(),
				description: z.string().optional(),
				cover: z.string().url(),
				months: z.array(
					z.object({
						month: z.string(),
						items: z.array(
							z.object({
								title: z.string(),
								image: z.string().url(),
								description: z.string().optional(),
							}),
						),
					}),
				),
			}),
		),
	}),
});

const page = defineCollection({
	loader: glob({ base: "./src/content/page", pattern: "**/*.{md,mdx}" }),
	schema: z.object({}),
});

export const collections = { post, tag, page, gallery };
