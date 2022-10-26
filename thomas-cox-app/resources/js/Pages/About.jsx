import React from "react";
import NavBar from "@/Components/NavBar";

function About() {
    return (
        <div className="relative flex items-top justify-center min-h-screen dark:bg-gray-900 sm:items-center sm:pt-0 bg-black">
            <NavBar />
            <div className="bg-black font-mono text-green-600 text-left max-w-6xl mx-auto sm:px-6 lg:px-8">
                <h1 className="mt-10 mb-0 text-center text-4xl">
                    Thomas Cox: <br /> <em>A Shorty Story</em>
                </h1>
                <p className="text-center m-5 mb-5 text-xl">
                    Hello, there. I'm T.C.
                </p>
                <div className="flex justify-center">
                    <iframe
                        src="https://giphy.com/embed/xTiIzJSKB4l7xTouE8"
                        width="240"
                        height="108"
                        frameBorder="0"
                        class="giphy-embed"
                        allowFullScreen
                    ></iframe>
                </div>
                <p className="indent-10 m-4 text-center text-lg">
                    I'm a{" "}
                    <u>
                        <em>Full-stack Engineer</em>
                    </u>{" "}
                    learning the ins and outs of programming.
                </p>
                <p className="indent-10 m-4 text-center">
                    <strong>
                        <u>My techs include:</u>
                    </strong>
                    <ul className="">
                        <li className="indent-8">GitHub</li>
                        <li className="indent-8">PHP</li>
                        <li className="indent-8">Javascript</li>
                        <li className="indent-8">JSX</li>
                        <li className="indent-8">Laravel 9</li>
                        <li className="indent-8">React</li>
                        <li className="indent-8">MySql</li>
                        <li className="indent-8">TailwindCSS</li>
                    </ul>
                </p>
                <p className="indent-10 m-4">
                    I have a Certificate in Laravel 9 from LinkedIn Learning,
                    have completed several courses in SoloLearn including React
                    and PHP, have followed countless tutorials on YouTube, and
                    am enrolled in a Full Stack Nanodegree from Udacity,
                    although the program has issues and lacks good support.
                </p>
                <p className="indent-10 m-4">
                    I have a BS in Psychology from UTC. I'm currently working in
                    healthcare as a pediatric Certified Medical Assistant with
                    expired aspirations of becoming a Physician Assistant.
                </p>
                <p className="indent-10 m-4">
                    I'm an Eagle Scout, a drummer, a movie-lover, and a new dad.
                </p>
                <p className="indent-10 m-4">
                    I've always had a deep interest in writing, creative
                    outlets, and especially in how things work, including
                    people. So, with wide eyes and a healthy amount of naivete,
                    I decided early on to become a psychologist.
                </p>
                <p className="indent-10 m-4">
                    After 4 years of psychology, I decided I did not, in fact,
                    want to be a psychologist.
                </p>
                <p className="indent-10 m-4">
                    For my entire working life, I've tried to find something
                    that would satisfy my curiosities of how things work along
                    with my love for creativity and artistic things (even though
                    I make no claims of being an artist). Programming cleanly
                    and concisely tells its own story and, just like writing,
                    takes practice.
                </p>
                <p className="indent-10 m-4">
                    This portfolio site and the projects in it are my practice
                    stories -- rough drafts in my journey to becoming the best
                    Full-Stack developer I can be. I can't wait to meet you and
                    talk code.
                </p>
            </div>
        </div>
    );
}

export default About;
