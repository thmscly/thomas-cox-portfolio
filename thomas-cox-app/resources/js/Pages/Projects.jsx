import React from "react";
import NavBar from "@/Components/NavBar";
import EmailButton from "@/Components/EmailButton";

function Projects() {
    return (
        <div className="relative flex items-top justify-center overflow-hidden min-h-screen dark:bg-gray-900 sm:items-center sm:pt-0 bg-black">
            <div className="font-mono overflow-hidden text-green-600 text-center max-w-6xl mx-auto sm:px-6 lg:px-8 bg-black">
                <NavBar />
                <div className="text-center text-6xl mt-20 dark:bg-gray-800">
                    <h1>Projects</h1>
                </div>
                <div className="text-3xl m-7 dark:bg-gray-800 overflow-hidden">
                    <h2>Here's what I've been working on.</h2>
                </div>
                <hr />
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-5 m-5 justify-items-center">
                    <a href="https://rachelcoxart.com/" target="_blank">
                        <div className="text-4xl m-3">
                            Rachel Cox Art
                            <p className="text-base m-2">
                                An e-commerce shopping-cart site built with
                                React to sell my wife's art. It's deployed with
                                Netlify and will have a Stripe integration.
                            </p>
                        </div>
                    </a>
                    <a
                        href="https://github.com/thmscly/rachel-cox-art-stripe-shopping-app.git"
                        target="_blank"
                    >
                        <div className="text-4xl m-3">
                            Full-Stack E-commerce
                            <p className="text-base m-2">
                                The repo to a different approach
                                rachelcoxart.com with a Laravel/React structure
                                with a Stripe API integration.
                            </p>
                        </div>
                    </a>
                    <a href="https://github.com/thmscly" target="_blank">
                        <div className="text-4xl m-3">
                            GitHub
                            <p className="text-base m-2">
                                That way lies repos.
                            </p>
                        </div>
                    </a>
                    <a
                        href="https://github.com/thmscly/thomas-cox-portfolio.git"
                        target="_blank"
                    >
                        <div className="text-4xl m-3">
                            Source Code
                            <p className="text-base m-2">
                                The repo to what you're seeing right now.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="m-10 text-center">
                    <EmailButton />
                </div>
            </div>
        </div>
    );
}

export default Projects;
