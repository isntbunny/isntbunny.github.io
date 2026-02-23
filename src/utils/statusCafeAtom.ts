export type StatusCafeAtomItem = {
	source: "status.cafe";
	id: string;
	title: string;
	text: string;
	publishDate: Date;
	link?: string;
};

const decodeXml = (input: string) =>
	input
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&amp;/g, "&")
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'");

const stripTags = (input: string) =>
	decodeXml(input)
		.replace(/<[^>]*>/g, " ")
		.replace(/\s+/g, " ")
		.trim();

const parseEntry = (entryXml: string): StatusCafeAtomItem | null => {
	const id = entryXml.match(/<id>([\s\S]*?)<\/id>/i)?.[1]?.trim() || "";
	const titleRaw = entryXml.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "";
	const contentRaw =
		entryXml.match(/<content[^>]*type=["']html["'][^>]*>([\s\S]*?)<\/content>/i)?.[1] ||
		entryXml.match(/<content[^>]*>([\s\S]*?)<\/content>/i)?.[1] ||
		"";
	const updatedRaw =
		entryXml.match(/<updated>([\s\S]*?)<\/updated>/i)?.[1]?.trim() ||
		entryXml.match(/<published>([\s\S]*?)<\/published>/i)?.[1]?.trim() ||
		"";
	const link = entryXml.match(/<link[^>]*href=["']([^"']+)["'][^>]*>/i)?.[1]?.trim();

	const publishDate = new Date(updatedRaw);
	if (!id || Number.isNaN(publishDate.valueOf())) return null;

	const title = stripTags(titleRaw) || "status.cafe";
	const text = stripTags(contentRaw) || title;

	return {
		source: "status.cafe",
		id,
		title,
		text,
		publishDate,
		...(link ? { link } : {}),
	};
};

export async function getStatusCafeFromAtom(atomUrl: string): Promise<StatusCafeAtomItem[]> {
	try {
		const response = await fetch(atomUrl, {
			headers: {
				accept: "application/atom+xml,application/xml,text/xml;q=0.9,*/*;q=0.8",
				"user-agent": "isntbunny-blog/1.0",
			},
		});
		if (!response.ok) return [];
		const xml = await response.text();
		const entryMatches = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/gi)];
		return entryMatches
			.map((match) => parseEntry(match[1] ?? ""))
			.filter((item): item is StatusCafeAtomItem => item !== null)
			.sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf());
	} catch {
		return [];
	}
}
