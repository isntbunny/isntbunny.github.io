import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	avatar: "https://i.postimg.cc/HxG7bTwc/250806.png",

	// 名字
	name: "Eucaly",

	// 个人签名
	bio: "ただ息をして待つばかりさ 泡沫に呑まれ消えゆく日を 戻ることない失った日々を",

	// 链接配置
	// 已经预装的图标集：fa6-brands，fa6-regular，fa6-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它————`pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "mailto:isntbunny@outlook.com",
			showName: false,
		},

		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/isntbunny",
			showName: false,
		},

		{
			name: "Discord Server",
			icon: "fa6-brands:discord",
			url: "https://discord.com/invite/VJkNV4ruc2",
			showName: false,
		},
	],
};
