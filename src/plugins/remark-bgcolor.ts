// src/plugins/remark-bgcolor.ts
import type { Root, Text, Parent } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

export const remarkBgColor: Plugin<[], Root> = () => (tree) => {
    visit(tree, 'text', (node: Text, index, parent: Parent) => {
        if (!node.value || !parent || index === undefined) return

        // 匹配 ::内容:: 格式
        const regex = /::(.+?)::/g

        if (regex.test(node.value)) {
            const parts: any[] = []
            let lastIndex = 0
            let match

            regex.lastIndex = 0
            while ((match = regex.exec(node.value)) !== null) {
                // 前面的文本
                if (match.index > lastIndex) {
                    parts.push({
                        type: 'text',
                        value: node.value.slice(lastIndex, match.index),
                    })
                }

                // 高亮内容 - 鸡蛋浅黄色 🥚
                parts.push({
                    type: 'html',
                    value: `<span style="background-color: #FAFAD2; padding: 0 4px; border-radius: 3px;">${match[1]}</span>`,
                })

                lastIndex = match.index + match[0].length
            }

            // 剩余文本
            if (lastIndex < node.value.length) {
                parts.push({
                    type: 'text',
                    value: node.value.slice(lastIndex),
                })
            }

            if (parts.length > 1) {
                parent.children.splice(index, 1, ...parts)
            }
        }
    })
}

export default remarkBgColor
