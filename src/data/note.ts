import { type CollectionEntry, getCollection } from "astro:content";

export async function getAllNotes(): Promise<CollectionEntry<"note">[]> {
	return await getCollection("note");
}
