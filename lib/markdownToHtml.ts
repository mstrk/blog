import remark from 'remark'
import highlight from 'remark-highlight.js'
import html from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(highlight)
    .use(html)
    .process(markdown)
  return result.toString()
}
