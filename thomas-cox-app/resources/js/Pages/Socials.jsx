import React from "react";
import NavBar from "@/Components/NavBar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailButton from "@/Components/EmailButton";

function Socials() {
    return (
        <div className="relative flex items-top justify-center overflow-hidden min-h-screen dark:bg-gray-900 sm:items-center sm:pt-0 bg-black">
            <div className="font-mono text-green-600 text-center max-w-6xl mx-auto sm:px-6 lg:px-8">
                <NavBar />
                <div className=" text-6xl mt-20 m-8 dark:bg-gray-800 overflow-hidden">
                    <h1>Social</h1>
                </div>
                <div className="text-3xl m-7 dark:bg-gray-800 overflow-hidden">
                    <h2>Here's how you can find me on the web.</h2>
                </div>
                <hr />
                <div className="grid flex grid-cols-1 gap-4 m-5 sm:bg-blue md:grid-cols-3 sm:grid-cols-3">
                    <div className="flex-col">
                        <a
                            href="https://www.linkedin.com/in/thomas-tc-cox/"
                            target="_blank"
                        >
                            <div className="text-4xl m-3">LinkedIn</div>
                            <LinkedInIcon />
                        </a>
                    </div>
                    <div className="flex-wrap">
                        <a href="https://github.com/thmscly" target="_blank">
                            <div className="text-4xl m-3">GitHub</div>
                            <GitHubIcon />
                        </a>
                    </div>
                    <div className="flex-col">
                        <a
                            href="https://discord.com/channels/@T.C.#3573"
                            target="_blank"
                        >
                            <div className="text-4xl m-3">
                                Discord
                                <p className="text-base m-2">T.C.#3573</p>
                            </div>
                        </a>
                    </div>
                </div>
                <EmailButton />
            </div>
        </div>
    );
}

export default Socials;
