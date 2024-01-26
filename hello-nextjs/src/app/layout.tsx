import Foot from "./Footer";
import Head from "./Header";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: {
        //absolute title replaces default and template in any page title
        // absolute: "Next.js 14",  
        default: "Next.js Tutorial -Codevolution",
        template: "%s | Next.js | TS",
    },
    description: "Generated by Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Head></Head>
                {children}
                <Foot></Foot>
            </body>
        </html>
    );
}