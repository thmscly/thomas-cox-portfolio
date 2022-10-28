import React from "react";

function NavBar() {
    return (
        <div className="m-3 text-green-600 fixed top-0 right-0 px-6 py-4 sm:block bg-black">
            <a href="/">Home &nbsp;</a>
            <a href="/about">About &nbsp;</a>
            <a href="/projects">Projects &nbsp;</a>
            <a href="/socials">Socials &nbsp;</a>
        </div>
    );
}

export default NavBar;
