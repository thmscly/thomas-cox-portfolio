import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import EmailButton from "@/Components/EmailButton";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen dark:bg-gray-900 sm:items-center sm:pt-0 bg-black">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-sm text-gray-700 dark:text-gray-500 underline"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                            {/* <Link
                                href={route("about")}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                About
                            </Link> */}
                        </>
                    )}
                </div>

                <div className="font-mono text-green-600 text-center max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className=" text-6xl m-8 dark:bg-gray-800 overflow-hidden">
                        <h1>Thomas Cox</h1>
                    </div>
                    <div className="text-4xl m-7 dark:bg-gray-800 overflow-hidden">
                        <h2>Full-stack Engineer</h2>
                    </div>
                    <hr />
                    <div className="grid grid-cols-3 gap-4 m-5">
                        <a href="/about">
                            <div className="text-4xl m-3">
                                About
                                <p className="text-base m-2">
                                    Who am I? That's a toughie. Click here and
                                    I'll walk you through my coding journey.
                                </p>
                            </div>
                        </a>
                        <a href="/projects">
                            <div className="text-4xl m-3">
                                Projects
                                <p className="text-base m-2">
                                    Click here to find links, GitHub repos, and
                                    see what I'm working on.
                                </p>
                            </div>
                        </a>
                        <a href="/socials">
                            <div className="text-4xl m-3">
                                Socials
                                <p className="text-base m-2">
                                    Click here to find me on the Interwebs.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="flex-grow">
                        <EmailButton />
                    </div>
                </div>
            </div>
        </>
    );
}
