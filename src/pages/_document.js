// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Other head tags */}
            </Head>
            <body>
                <Main />
                <NextScript />
                {/* Hidden form for Netlify detection */}
                <form name="contact" method="POST" data-netlify="true" hidden>
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <textarea name="message"></textarea>
                </form>
            </body>
        </Html>
    );
}