export const GET = () =>
	new Response(null, {
		status: 301,
		headers: {
			Location: "/memos/rss.xml",
		},
	});
