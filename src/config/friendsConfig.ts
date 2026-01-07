import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 显示列数：2列或3列
	columns: 2,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "摸鱼小站官方介绍网站",
		imgurl: "https://favicon.im/moyuxiaozhan.mysxl.cn",
		desc: "我们是一群来自不同网站，不同地区，甚至不同星球的摸鱼爱好者，我们所做的一切，都是为摸鱼而生！",
		siteurl: "https://moyuxiaozhan.mysxl.cn/",
		tags: ["团队"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
	return friendsConfig
		.filter((friend) => friend.enabled)
		.sort((a, b) => b.weight - a.weight);
};
