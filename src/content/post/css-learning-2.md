---
title: "CSS学习笔记（2）选择器"
description: 杂乱自用笔记
publishDate: 2026-04-16
---

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
```

### 1. `@import`
用于导入外部样式表。
```css
@import url('styles.css');
```
### 2. `@media`
用于定义媒体查询，根据不同的媒体类型或设备特性应用样式。
```css
@media (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
```
### 3. `@font-face`
用于定义自定义字体。
```css
@font-face {
    font-family: 'MyCustomFont';
    src: url('myfont.woff2') format('woff2'),
         url('myfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
```
### 4. `@keyframes`
用于定义动画序列。
```css
@keyframes slidein {
    from {
        margin-left: 100%;
        width: 300%;
    }

    to {
        margin-left: 0%;
        width: 100%;
    }
}
```
### 5. `@layer`
用于定义 CSS 层，以便更好地组织和管理样式。
```css
@layer base {
    body {
        font-family: Arial, sans-serif;
    }
}

@layer components {
    .button {
        background-color: blue;
        color: white;
    }
}
```
### 6. `@custom-variant`
用于定义自定义变体，通常与 Tailwind CSS 一起使用。
```css
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
```
### 7. `@theme`
用于定义主题变量，通常与 Tailwind CSS 一起使用。
```css
@theme {
    --color-global-bg: oklch(96% 0.018 220);
    --color-global-text: oklch(30% 0.032 232);
}
```
### 8. `@view-transition`
用于定义视图过渡效果。
```css
@view-transition {
    navigation: auto;
}
```
### 9. `@utility`
用于定义实用工具类，通常与 Tailwind CSS 一起使用。
```css
@utility prose {
    --tw-prose-body: var(--color-global-text);
    --tw-prose-bold: var(--color-global-text);
}
```
### 10. `@apply`
用于应用 Tailwind CSS 类。
```css
.textlink {
    @apply hover:decoration-link underline underline-offset-2 hover:decoration-2;
}
```
### 11. `@layer`
用于定义 CSS 层，以便更好地组织和管理样式。
```css
@layer base {
    body {
        font-family: Arial, sans-serif;
    }
}

@layer components {
    .button {
        background-color: blue;
        color: white;
    }
}
```
### 12. `@custom-media`
用于定义自定义媒体查询。
```css
@custom-media --small-viewport (max-width: 600px);

@media (--small-viewport) {
    body {
        background-color: lightblue;
    }
}
```
### 13. `@supports`
用于定义基于特性查询的样式。
```css
@supports (display: grid) {
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}
```
### 14. `@document`
用于定义基于文档 URL 的样式。
```css
@document url-prefix("https://example.com/") {
    body {
        background-color: lightgray;
    }
}
```
### 15. `@namespace`
用于定义 XML 命名空间。
```css
@namespace svg url(http://www.w3.org/2000/svg);

svg|rect {
    fill: blue;
}
```
### 16. `@page`
用于定义打印页面的样式。
```css
@page {
    margin: 2cm;
}
```
### 17. `@counter-style`
用于定义自定义计数器样式。
```css
@counter-style my-style {
    system: cyclic;
    symbols: "A" "B" "C";
    suffix: ".";
}
```
### 18. `@font-feature-values`
用于定义字体特性值。
```css
@font-feature-values "MyFont" {
    @swash {
        values: normal, swash;
    }
}
```
### 19. `@property`
用于定义自定义属性。
```css
@property --my-color {
    syntax: "<color>";
    inherits: false;
    initial-value: #000000;
}
```
### 20. `@container`
用于定义容器查询。
```css
@container (min-width: 600px) {
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}