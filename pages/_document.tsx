import Document, { Html, Head, Main, NextScript } from 'next/document'

// needs to be default export for next
export default class TheDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-accent-7 text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
