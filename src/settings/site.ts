export const homeConfig = {
	typingText: "幸せのカウントダウン",
	welcomeText: "WELCOME:P",
	countdownTargets: [
		{ key: "monthEnd", label: "Days until month end:", suffix: " days" },
		{ key: "nextYear", label: "Days until next year:", suffix: " days" },
		{ key: "gaokao2027", label: "Days until Gaokao 2027:", suffix: " days" },
	],
	galleryCardImage: "https://i.postimg.cc/43GZ382v/e2511.png",
	profileCoverImage: "https://i.postimg.cc/4dLTBX4R/e250416.jpg",
	defaultColor: "#22C55E",
	topBannerImage: "https://i.postimg.cc/43GZ382v/e2511.png",
	memosMiniImage: "https://i.postimg.cc/8kxpW5nc/pixel-takopi.png",
	readmeCornerImage: "https://i.postimg.cc/fytPDMcs/fufu-miku.png",
	statusSideImages: ["https://i.postimg.cc/8kxpW5nc/pixel-takopi.png", "https://i.postimg.cc/mZPZtMjV/win-taskfailed.png"],
	statusCafeAtomUrl: "https://status.cafe/users/isntbunny.atom",
} as const;

export const siteSettings = {
	statusCafe: {
		atomUrl: "https://status.cafe/users/isntbunny.atom",
	},
	backgrounds: {
		default:
			"https://i.postimg.cc/Y2bwBpkP/26898018.jpg",
		home:
			"https://i.postimg.cc/Y2bwBpkP/26898018.jpg",
		pages: {
			"/gallery/":
				"https://i.postimg.cc/Y2bwBpkP/26898018.jpg",
		},
	},
} as const;

export const getPageBackground = (pathname: string) =>
	siteSettings.backgrounds.pages[pathname as keyof typeof siteSettings.backgrounds.pages] ||
	siteSettings.backgrounds.default;
