export const themeConfig = {
	colors: {
		light: {
			globalBg: "oklch(96% 0.018 220)",
			globalText: "oklch(34% 0.03 232)",
			link: "oklch(52% 0.085 220)",
			accent: "oklch(60% 0.09 218)",
			accent2: "oklch(38% 0.045 232)",
			quote: "oklch(48% 0.055 220)",
			bgOverlay: "rgba(236, 245, 248, 0.78)",
			surface: "rgba(255, 255, 255, 0.7)",
		},
		dark: {
			globalBg: "oklch(24% 0.02 232)",
			globalText: "oklch(90% 0.018 225)",
			link: "oklch(76% 0.09 220)",
			accent: "oklch(73% 0.08 215)",
			accent2: "oklch(90% 0.02 230)",
			quote: "oklch(78% 0.05 218)",
			bgOverlay: "rgba(10, 20, 28, 0.65)",
			surface: "rgba(17, 28, 37, 0.62)",
		},
	},
	backgrounds: {
		home: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
		default:
			"https://i.postimg.cc/J0bfgL1S/hitori_band_playing_bocchi_the_rock_hd_wallpaper_uhdpaper_com_395_5_k.jpg",
		pages: {
			"/gallery/":
				"https://images.unsplash.com/photo-1508261303786-79cf9a29f6f3?auto=format&fit=crop&w=2000&q=80",
		},
	},
} as const;

const toCssVars = (vars: Record<string, string>) =>
	Object.entries(vars)
		.map(([key, value]) => `--${key}: ${value};`)
		.join("\n");

export const themeCssVars = {
	light: toCssVars({
		"color-global-bg": themeConfig.colors.light.globalBg,
		"color-global-text": themeConfig.colors.light.globalText,
		"color-link": themeConfig.colors.light.link,
		"color-accent": themeConfig.colors.light.accent,
		"color-accent-2": themeConfig.colors.light.accent2,
		"color-quote": themeConfig.colors.light.quote,
		"color-bg-overlay": themeConfig.colors.light.bgOverlay,
		"color-surface": themeConfig.colors.light.surface,
	}),
	dark: toCssVars({
		"color-global-bg": themeConfig.colors.dark.globalBg,
		"color-global-text": themeConfig.colors.dark.globalText,
		"color-link": themeConfig.colors.dark.link,
		"color-accent": themeConfig.colors.dark.accent,
		"color-accent-2": themeConfig.colors.dark.accent2,
		"color-quote": themeConfig.colors.dark.quote,
		"color-bg-overlay": themeConfig.colors.dark.bgOverlay,
		"color-surface": themeConfig.colors.dark.surface,
	}),
};

export const getPageBackground = (pathname: string) =>
	themeConfig.backgrounds.pages[pathname as keyof typeof themeConfig.backgrounds.pages] ||
	themeConfig.backgrounds.default;
