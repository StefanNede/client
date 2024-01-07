import Head from 'next/head'
import Navbar from "../components/Navbar"
import Link from "next/link"
import {useState, useEffect} from "react"

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
                    <div className="flex flex-col">
                        <button className="p-1 bg-white rounded">
                            <Link href="/practiceType" className="text-black" aria-current="page">Offline Private Practice</Link>
                        </button>
                        <div>
                          {/* this will hold the rooms and online features */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}