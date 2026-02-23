export const siteSettings = {
	font: {
		bodyClass: "font-mono",
	},
	backgrounds: {
		home: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
		default:
			"https://i.postimg.cc/J0bfgL1S/hitori_band_playing_bocchi_the_rock_hd_wallpaper_uhdpaper_com_395_5_k.jpg",
	},
	comments: {
		twikoo: {
			envId: "https://your-twikoo-env-id.example.com",
			scriptSrc: "https://cdn.staticfile.net/twikoo/1.6.41/twikoo.all.min.js",
		},
	},
	statusCafe: {
		username: "isntbunny",
		scriptSrc: "https://status.cafe/current-status.js",
	},
} as const;
