import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <p>
            Next.js is a minimalistic framework for creating server-rendered
            React applications.
          </p>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
