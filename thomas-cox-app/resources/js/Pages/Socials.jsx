import React from "react";

function Socials() {
    return (
        <div>
            <div className="font-mono text-green-600 text-center max-w-6xl mx-auto sm:px-6 lg:px-8">
                <NavBar />

                <div className=" text-6xl m-8 dark:bg-gray-800 overflow-hidden">
                    <h1>Social</h1>
                </div>
                <div className="text-3xl m-7 dark:bg-gray-800 overflow-hidden">
                    <h2>Here's how you can find me on the web.</h2>
                </div>
                <hr />
                <div className="grid grid-cols-3 gap-4 m-5">
                    <a href="https://rachelcoxart.com/">
                        <div className="text-4xl m-3">
                            <a href="/about">GitHub</a>
                            <p className="text-base m-2">
                                An e-commerce shopping site built with React to
                                sell my wife's art. It's deployed with Netlify
                                and will have a Stripe integration.
                            </p>
                        </div>
                    </a>
                    <a href="/projects">
                        <div className="text-4xl m-3">
                            <a href="/projects">Adventure? Choose your own!</a>
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
                </div>
            </div>
        </div>
    );
}

export default Socials;
