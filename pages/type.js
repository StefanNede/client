import Head from 'next/head';
import Navbar from "../components/Navbar";
export default function Type() {
    return (
        <div>
            <Head>
                <title>Typer: Type</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar/>
                <div className="p-5">
                    <h1 className="text-center font-bold mb-4 text-2xl lg:text-4xl">Type</h1>
                </div>
            </main>
        </div>
    )
}