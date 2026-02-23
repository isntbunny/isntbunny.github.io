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
