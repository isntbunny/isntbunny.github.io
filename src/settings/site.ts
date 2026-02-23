export const homeConfig = {
	typingText: "幸せのカウントダウン",
	welcomeText: "欢迎来自远方的朋友~",
	countdownTargets: [
		{ key: "monthEnd", label: "距离月末还有", suffix: "天" },
		{ key: "nextYear", label: "距离下一年还有", suffix: "天" },
		{ key: "gaokao2027", label: "距离2027年高考还有", suffix: "天" },
	],
	galleryCardImage: "https://i.postimg.cc/43GZ382v/e2511.png",
	profileCoverImage: "https://i.postimg.cc/4dLTBX4R/e250416.jpg",
	defaultColor: "#22C55E",
} as const;

export const siteSettings = {
	comments: {
		twikoo: {
			envId: "https://your-twikoo-env-id.example.com",
			scriptSrc: "https://cdn.staticfile.net/twikoo/1.6.41/twikoo.all.min.js",
		},
	},
	statusCafe: {
		atomUrl: "https://status.cafe/users/isntbunny.atom",
	},
	backgrounds: {
		home:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
		default:
			"https://i.postimg.cc/J0bfgL1S/hitori-band-playing-bocchi-the-rock-hd-wallpaper-uhdpaper-com-395-5-k.jpg",
		pages: {
			"/gallery/":
				"https://images.unsplash.com/photo-1508261303786-79cf9a29f6f3?auto=format&fit=crop&w=2000&q=80",
		},
	},
} as const;

export const getPageBackground = (pathname: string) =>
	siteSettings.backgrounds.pages[pathname as keyof typeof siteSettings.backgrounds.pages] ||
	siteSettings.backgrounds.default;
