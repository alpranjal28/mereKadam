import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>WELCOME TO HOME PAGE</h1>
            <Link href="/blog">Blog</Link>
            <br />
            <Link href="/products">Products</Link>
            <br />
            <Link href="/docs">Docs</Link>
            <br />
            <Link href="/about">About</Link>
            <br />
            <Link href="/login">Login</Link>
            <br />
            <Link href="/register">Register</Link>
            <br />
            <Link href="/order-product">Order Product</Link>
            <br />
            <Link href="/dashboard">Dashboard</Link>
            <br />
            <Link href="/complex-dashboard">Complex dashboard w Parallel routes</Link>
            <br />
            <Link href="/f1">Intercepted routes &#40; refresh to show original pages &#41; </Link>
            <br />
            <Link href="/photo-feed">Wonders of the World w Parallel intercepting routes</Link>
            <br />
        </>
    );
}
