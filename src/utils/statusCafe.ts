import { siteSettings } from "@/config/site-settings";

export type StatusCafeItem = {
	source: "status.cafe";
	id: string;
	text: string;
	publishDate: Date;
};

const parseDate = (value?: string | null) => {
	if (!value) return null;
	const parsed = new Date(value);
	return Number.isNaN(parsed.getTime()) ? null : parsed;
};

export async function getStatusCafeItems(): Promise<StatusCafeItem[]> {
	try {
		const endpoint = `${siteSettings.statusCafe.endpoint}?name=${encodeURIComponent(siteSettings.statusCafe.username)}`;
		const res = await fetch(endpoint, {
			headers: {
				"user-agent": "isntbunny-blog/1.0",
				accept: "text/html,application/json;q=0.9,*/*;q=0.8",
			},
		});
		if (!res.ok) return [];
		const body = await res.text();

		const textMatch = body.match(/<[^>]*id=["']?status[^>]*>([\s\S]*?)<\/[^>]+>/i);
		const dateMatch = body.match(/<time[^>]*datetime=["']([^"']+)["'][^>]*>/i);
		const fallbackText = body
			.replace(/<[^>]+>/g, " ")
			.replace(/\s+/g, " ")
			.trim();
		const cleanedText = (textMatch?.[1] || fallbackText || "")
			.replace(/<[^>]+>/g, " ")
			.replace(/\s+/g, " ")
			.trim();
		const parsedDate = parseDate(dateMatch?.[1]) || new Date();
		if (!cleanedText) return [];
		return [
			{
				source: "status.cafe",
				id: `status-cafe-${parsedDate.getTime()}`,
				text: cleanedText,
				publishDate: parsedDate,
			},
		];
	} catch {
		return [];
	}
}
