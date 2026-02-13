import type { BackgroundWallpaperConfig } from "@/types/config";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	// 壁纸模式："banner" 横幅壁纸，"overlay" 全屏透明，"none" 纯色背景无壁纸
	mode: "banner",
	// 是否允许用户通过导航栏切换壁纸模式，设为false可提升性能（只渲染当前模式）
	switchable: false,
	// 背景图片配置
	src: {
		// 桌面背景图片
		desktop:
			"https://i.postimg.cc/J0bfgL1S/hitori-band-playing-bocchi-the-rock-hd-wallpaper-uhdpaper-com-395-5-k.jpg",
		// 移动背景图片
		mobile:
			"https://i.postimg.cc/J0bfgL1S/hitori-band-playing-bocchi-the-rock-hd-wallpaper-uhdpaper-com-395-5-k.jpg",
	},
	// Banner模式特有配置
	banner: {
		// 图片位置
		// 支持所有CSS object-position值，如: 'top', 'center', 'bottom', 'left top', 'right bottom', '25% 75%', '10px 20px'..
		// 如果不知道怎么配置百分百之类的配置，推荐直接使用：'center'居中，'top'顶部居中，'bottom' 底部居中，'left'左侧居中，'right'右侧居中
		position: "center",

		// 主页横幅文字
		homeText: {
			// 是否启用主页横幅文字
			enable: true,
			// 主页横幅主标题
			title: "幸福（？）倒計時",
			// 主页横幅主标题字体大小
			titleSize: "3.8rem",
			// 主页横幅副标题
			subtitle: [
				"ただ息をして待つばかりさ",
				"泡沫に呑まれ消えゆく日を",
				"戻ることない失った日々を",
			],
			// 主页横幅副标题字体大小
			subtitleSize: "1.5rem",
			typewriter: {
				// 是否启用打字机效果
				// 打字机开启 → 循环显示所有副标题
				// 打字机关闭 → 每次刷新随机显示一条副标题
				enable: true,
				// 打字速度（毫秒）
				speed: 100,
				// 删除速度（毫秒）
				deleteSpeed: 50,
				// 完全显示后的暂停时间（毫秒）
				pauseTime: 2000,
			},
		},
		// 图片来源
		credit: {
			enable: {
				// 桌面端显示横幅图片来源文本
				desktop: false,
				// 移动端显示横幅图片来源文本
				mobile: false,
			},
			text: {
				// 桌面端要显示的来源文本
				desktop: "Pixiv - ",
				// 移动端要显示的来源文本
				mobile: "Pixiv - ",
			},
			url: {
				// 桌面端原始艺术品或艺术家页面的 URL 链接
				desktop: "",
				// 移动端原始艺术品或艺术家页面的 URL 链接
				mobile: "",
			},
		},
		// 横幅导航栏配置
		navbar: {
			// 横幅导航栏透明模式："semi" 半透明加圆角，"full" 完全透明，"semifull" 动态透明
			transparentMode: "semi",
		},
		// 波浪动画效果配置，开启可能会影响页面性能，请根据实际情况开启
		waves: {
			enable: {
				// 桌面端是否启用波浪动画效果
				desktop: true,
				// 移动端是否启用波浪动画效果
				mobile: true,
			},
			performance: {
				// 性能优化说明：
				// quality: "high" - 最佳视觉效果，但GPU占用较高，适合高性能设备
				// quality: "medium" - 平衡性能和质量，适合中等性能设备
				// quality: "low" - 最低GPU占用，动画更简单，适合低性能设备
				// hardwareAcceleration: true - 启用GPU加速，提升性能但增加GPU占用
				// hardwareAcceleration: false - 禁用GPU加速，降低GPU占用但可能影响性能
				quality: "medium",
				// 是否启用硬件加速
				hardwareAcceleration: true,
			},
		},
	},
	// 全屏透明覆盖模式特有配置
	overlay: {
		// 层级，确保壁纸在背景层
		zIndex: -1,
		// 壁纸透明度
		opacity: 0.8,
		// 背景模糊程度
		blur: 0,
	},
};
