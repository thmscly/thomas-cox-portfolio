import React from "react";
import NavBar from "@/Components/NavBar";

function Projects() {
    return (
        <div>
            <div className="relative flex items-top justify-center min-h-screen dark:bg-gray-900 sm:items-center sm:pt-0 bg-black">
                <div className="font-mono text-green-600 text-center max-w-6xl mx-auto sm:px-6 lg:px-8 bg-black">
                    <NavBar />
                    <div className=" text-6xl m-10 dark:bg-gray-800">
                        <h1>Projects</h1>
                    </div>
                    <div className="text-3xl m-7 dark:bg-gray-800 overflow-hidden">
                        <h2>
                            Some of of the things I've built and my
                            works-in-progress.
                        </h2>
                    </div>
                    <hr />
                    <div className="grid grid-cols-3 gap-5 m-5 justify-items-center">
                        <a href="https://rachelcoxart.com/">
                            <div className="text-4xl m-3">
                                <a href="/about">Rachel Cox Art</a>
                                <p className="text-base m-2">
                                    An e-commerce shopping site built with React
                                    to sell my wife's art. It's deployed with
                                    Netlify and will have a Stripe integration.
                                </p>
                            </div>
                        </a>
                        <a href="/projects">
                            <div className="text-4xl m-3">
                                <a href="/projects">Adventure Time!</a>
                                <p className="text-base m-2">
                                    Can you fix the spaceship and get home?
                                </p>
                            </div>
                        </a>
                        <a href="/projects">
                            <div className="text-4xl m-3">
                                <a href="/projects">GitHub</a>
                                <p className="text-base m-2">
                                    That way lies Repos.
                                </p>
                            </div>
                        </a>
                        <a href="/projects">
                            <div className="text-4xl m-3">
                                <a href="/projects">Source Code</a>
                                <p className="text-base m-2">
                                    Here's the source code for what you're
                                    seeing right now.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
