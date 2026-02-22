import rss from "@astrojs/rss";
import { getAllNotes } from "@/data/note";
import { siteConfig } from "@/site.config";

export const GET = async () => {
	const notes = await getAllNotes();

	return rss({
		title: `${siteConfig.title} - Notes`,
		description: "短博客 RSS",
		site: import.meta.env.SITE,
		items: notes.map((note) => ({
			title: note.data.title,
			description: note.data.description,
			pubDate: note.data.publishDate,
			link: `notes/${note.id}/`,
		})),
	});
};
