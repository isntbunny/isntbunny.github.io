---
title: 周记-暂时退网
description: This post showcases using the markdown admonition feature in Astro Cactus
publishDate: 25 Aug 2024
updatedDate: 4 July 2025
---
大抵是没有正式写过一片自己原创的博文的，因为一直没有好的灵感，好的想法去书写，除了日记就是流水账留给自己看了。这几天寒假花了很长时间完善了自己的astro博客，感觉“浪费”了很多时间，是时候该收尾一下淡出网络生活了，于是就正好写一篇散散的杂谈水一篇好了。

一个共识是博客最重要的不是界面而是内容——虽然说我也没设计出什么好的界面来就是了XD灵感真的很枯竭了，有的时候会想，如果换作小学时候的我，些许灵感会多些？可能吧，但转念一想，并不是以前想象力多丰富，而是以前想到的敢做出来，现在就多了更多的斟酌与畏难。

在我把电脑恢复出厂设置之前，记录一下目前的电脑都装了什么软件8

## 软件

### vscode

有时候会卡，尤其是打开内置的console的时候（所以平常宁愿绕几步打开系统的cmd）
不过对于我这种八九年前的低配笔记本，还能用就已经够意思了

### obsidian

写md文档的，比vscode流畅好几倍

### Microsoft Office Mondo 2016

kms激活的实时更新最新版的office，不知道换新电脑后还能不能再次下载到了。

### rainmeter

可以做桌面插件或者悬浮的插件
目前用的最多的是在任务栏显示网速

```ini
[Rainmeter]
Update=1000
Background=
BackgroundMode=0
BackgroundMargins=0,0,0,0

[Variables]
fontName=Trebuchet MS
textSize=8
colorBar=235,170,0,255
colorText=255,255,255,205
maxDownload=10485760
MaxUpload=10485760

[measureNetIn]
Measure=NetIn
NetInSpeed=#maxDownload#

[measureNetOut]
Measure=NetOut
NetOutSpeed=#maxUpload#

[styleLeftText]
StringAlign=Left
StringCase=None
StringStyle=Bold
StringEffect=Shadow
FontEffectColor=0,0,0,20
FontColor=#colorText#
FontFace=#fontName#
FontSize=#textSize#
AntiAlias=1
ClipString=1

[styleRightText]
StringAlign=Right
StringCase=None
StringStyle=Bold
StringEffect=Shadow
FontEffectColor=0,0,0,20
FontColor=#colorText#
FontFace=#fontName#
FontSize=#textSize#
AntiAlias=1
ClipString=1

[styleBar]
BarColor=#colorBar#
BarOrientation=HORIZONTAL
SolidColor=255,255,255,15

[meterUploadLabel]
Meter=String
MeterStyle=styleLeftText
X=10
Y=60
W=140
H=14
Text=Upload
  
[meterUploadValue]
Meter=String
MeterStyle=styleRightText
MeasureName=measureNetOut
X=150
Y=0r
W=140
H=14
Text=%1B/s
NumOfDecimals=1
AutoScale=1

[meterUploadBar]
Meter=Bar
MeterStyle=styleBar
MeasureName=measureNetOut
X=10
Y=75
W=140
H=1
 
[meterDownloadLabel]
Meter=String
MeterStyle=styleLeftText
X=170
Y=60
W=140
H=14
Text=Download
  
[meterDownloadValue]
Meter=String
MeterStyle=styleRightText
MeasureName=measureNetIn
X=310
Y=0r
W=140
H=14
Text=%1B/s
NumOfDecimals=1
AutoScale=1
  
[meterDownloadBar]
Meter=Bar
MeterStyle=styleBar
MeasureName=measureNetIn
X=170
Y=75
W=140
H=1
```

### Anki

记忆卡牌。本来打算寒假坚持刷，结果还是被懒惰战胜。

btw，电脑端不如手机端的ankidroid好用欸。但是删除模板和tag只能在电脑端。

### Aboboo

学习英语好帮手。导入音频，自动短句，可复读。

### Mdict

可导入`.mdx` 格式词典，离线使用很好。界面有些简陋。


