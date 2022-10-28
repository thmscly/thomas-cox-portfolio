import React from "react";
import NavBar from "@/Components/NavBar";
import EmailButton from "@/Components/EmailButton";

function About() {
    return (
        <div className="relative flex items-top justify-center min-h-screen dark:bg-gray-900 sm:items-center sm:pt-0 bg-black">
            <NavBar />
            <div className="bg-black font-mono text-green-600 text-left max-w-6xl mx-auto sm:px-6 lg:px-8">
                <h1 className="mt-20 text-center text-4xl">
                    Thomas Cox: <br /> <em>A Shorty Story</em>
                </h1>
                <p className="text-center m-5 mb-5 text-xl">Hello, there.</p>
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
                <p className="0 m-4 text-center text-lg">
                    I'm T.C.
                    <br />
                    <br />
                    I'm a{" "}
                    <u>
                        <em>Full-stack Engineer</em>
                    </u>{" "}
                    learning the ins and outs of programming.
                </p>
                <p className="m-4 text-center">
                    <strong>
                        <u>My Techs:</u>
                    </strong>
                    <ul className="text-center">
                        <li className="">Laravel 9</li>
                        <li className="">React</li>
                        <li className="">Javascript</li>
                        <li className="">JSX</li>
                        <li className="">PHP</li>
                        <li className="">GitHub</li>
                        <li className="">MySql</li>
                        <li className="">TailwindCSS</li>
                    </ul>
                </p>
                <p className="indent-8 m-4">
                    I have a Certificate in Laravel 9 from LinkedIn Learning,
                    have completed several courses in SoloLearn including React
                    and PHP, have followed countless tutorials on YouTube, and
                    am enrolled in a Full Stack Nanodegree from Udacity,
                    although the program has issues and lacks good support.
                </p>
                <p className="indent-8 m-4">
                    I have a BS in Psychology from the University of Tennessee
                    at Chattanooga. I'm currently working in healthcare as a
                    pediatric Certified Medical Assistant.
                </p>
                <p className="indent-8 m-4">
                    I'm an Eagle Scout, a drummer, a movie-lover, and a new dad.
                </p>
                <p className="indent-8 m-4">
                    I've always had a deep interest in creative writing, writing
                    and playing music, creative outlets, as well as{" "}
                    <em>how things work</em> - including people. So, with wide
                    eyes, a desire to help, and a healthy amount of naivete, I
                    figured early on I would become a psychologist.
                </p>
                <p className="indent-8 m-4">
                    After 4 years of psychology, I decided I did not, in fact,
                    want to be a psychologist.
                </p>
                <p className="indent-8 m-4">
                    Throughout the entirety of my working life, I've tried to
                    find something that would satisfy my curiosities of how
                    things work along with my love for creativity and artistic
                    things (though I make no claims of being an artist).
                    Programming cleanly and concisely tells its own story and,
                    just like writing, takes practice.
                </p>
                <p className="indent-8 m-4">
                    This portfolio site and the projects in it are my practice
                    stories -- rough drafts in my journey to becoming the best
                    full-stack engineer I can be. I can't wait to meet you and
                    talk some code.
                </p>
                <div className="m-10 text-center">
                    <EmailButton />
                </div>
            </div>
        </div>
    );
}

export default About;
