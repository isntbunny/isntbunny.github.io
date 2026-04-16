---
title: CSS学习笔记（1）
tags:
  - web
  - css
publishDate: 2026-02-26
---
选择器
CSS内置属性

### 字体样式

serif, sans-serif, monospace, cursive, fantasy

```css
@font-face {
	font-family:"";
	src: url("")
}
```

### 字体大小

`font-size: 15px` 
`font-size: 150%` 父元素的150%大小
`font-size: 1.5em` 父元素的1.5倍
这俩作用差不多

```css
.body{
	font-size: small;
}
```

xx-small
x-small
small
medium
large
x-large
xx-large
每个大小大约比前一个大小大20%

设定规则
- 选择一个关键字如small/medium，指定它作为body规则中也就是默认的字体大小
- 使用em/百分数，相对于body字体大小指定其他元素的字体大小
这样调整页面字体大小方便一些，按比例的牵一发而动全身。

### 字体风格

`font-weight:normal`
`font-style:italic` 
italic：斜体文本
oblique：倾斜文本

### 指定颜色

- `background-color: rgb(80%,40%,0%)` rgb: red, green, blue
- `rgb(204,102,0)` 255的80%是204，255的40%是102，0%是0
- `#cc6600` 每组两位数字分别代表颜色的红绿蓝分量（从0到255的数）
hexadecimal：16进制计数系统
0123456789ABCDEF
如cc→12\*16+12=204
66→6\*16+6=102

### 盒模型

```css
.p{
	border-color: black;
	border-width: 1px;
	border-style: solid;
	background-color: #a7cece;
	padding: 25px;
	padding-left: 80px;
	margin: 30px;
	margin-right: 250px;
	background-image: url(https://sample.com/images/bkgrd.gif);
	background-repeat: no-repeat; repeat-x, repeat-y,inherit
	background-position: top left; 
}
```


## 布局

### 流


### 浮动布局
适合浮动图片
### 凝胶布局

### 绝对布局
### 表格显示布局

## HTML 5

header footer
section article
time

在 CSS 中，选择器用于选择 HTML 元素以应用样式。选择器可以有多种类型，每种类型都有不同的用途和语法。以下是一些常见的选择器类型及其详细介绍：

### 基本选择器

1. **类选择器（Class Selector）**
   - 语法：`.classname`
   - 示例：`.button`
   - 用途：选择具有特定类名的元素。

2. **ID 选择器（ID Selector）**
   - 语法：`#idname`
   - 示例：`#header`
   - 用途：选择具有特定 ID 的元素。每个 ID 在页面中应是唯一的。

3. **元素选择器（Element Selector）**
   - 语法：`elementname`
   - 示例：`p`
   - 用途：选择特定类型的所有元素。

4. **通用选择器（Universal Selector）**
   - 语法：`*`
   - 示例：`*`
   - 用途：选择所有元素。

### 属性选择器

1. **属性存在选择器**
   - 语法：`[attribute]`
   - 示例：`[type="text"]`
   - 用途：选择具有特定属性的元素。

2. **属性值选择器**
   - 语法：`[attribute="value"]`
   - 示例：`[type="text"]`
   - 用途：选择具有特定属性值的元素。

3. **属性值包含选择器**
   - 语法：`[attribute*="value"]`
   - 示例：`[class*="btn"]`
   - 用途：选择属性值包含特定字符串的元素。

### 伪类选择器

1. **链接伪类**
   - 语法：`:link`, `:visited`, `:hover`, `:active`, `:focus`
   - 示例：`a:link`, `a:visited`
   - 用途：选择链接的不同状态。

2. **结构伪类**
   - 语法：`:first-child`, `:last-child`, `:nth-child(n)`, `:nth-of-type(n)`
   - 示例：`p:first-child`, `li:nth-child(2)`
   - 用途：选择基于元素在父元素中的位置的元素。

3. **用户界面伪类**
   - 语法：`:enabled`, `:disabled`, `:checked`
   - 示例：`input:enabled`, `input:checked`
   - 用途：选择基于用户界面状态的元素。

### 伪元素选择器

1. **伪元素**
   - 语法：`::before`, `::after`, `::first-line`, `::first-letter`
   - 示例：`p::first-line`, `div::after`
   - 用途：选择元素的特定部分或插入内容。

### 组合选择器

1. **后代选择器**
   - 语法：`ancestor descendant`
   - 示例：`div p`
   - 用途：选择所有匹配后代的元素。

2. **子选择器**
   - 语法：`parent > child`
   - 示例：`div > p`
   - 用途：选择所有直接子元素。

3. **相邻兄弟选择器**
   - 语法：`element + element`
   - 示例：`h1 + p`
   - 用途：选择紧接在另一个元素后的元素。

4. **通用兄弟选择器**
   - 语法：`element ~ element`
   - 示例：`h1 ~ p`
   - 用途：选择在另一个元素之后的所有兄弟元素。

### 组合选择器

1. **组合选择器**
   - 语法：`selector1, selector2`
   - 示例：`h1, h2, h3`
   - 用途：选择多个选择器匹配的元素。

### 示例代码

以下是一些示例代码，展示了不同类型的选择器：

```css
/* 类选择器 */
.button {
    background-color: blue;
    color: white;
}

/* ID 选择器 */
#header {
    background-color: gray;
    color: white;
}

/* 元素选择器 */
p {
    font-size: 16px;
    line-height: 1.5;
}

/* 通用选择器 */
* {
    margin: 0;
    padding: 0;
}

/* 属性选择器 */
[type="text"] {
    border: 1px solid #ccc;
}

/* 伪类选择器 */
a:link {
    color: blue;
}

a:visited {
    color: purple;
}

a:hover {
    color: red;
}

p:first-child {
    font-weight: bold;
}

/* 伪元素选择器 */
p::first-line {
    font-variant: small-caps;
}

div::after {
    content: " - End of content";
    color: gray;
}

/* 后代选择器 */
div p {
    color: green;
}

/* 子选择器 */
div > p {
    color: blue;
}

/* 相邻兄弟选择器 */
h1 + p {
    margin-top: 0;
}

/* 通用兄弟选择器 */
h1 ~ p {
    color: orange;
}

/* 组合选择器 */
h1, h2, h3 {
    color: navy;
}