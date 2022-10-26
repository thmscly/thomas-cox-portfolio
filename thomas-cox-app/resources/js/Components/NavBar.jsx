import React from "react";

function NavBar() {
    return (
        <div className="text-green-600 fixed top-0 right-0 px-6 py-4 sm:block">
            <a href="/">Home &nbsp;</a>
            <a href="/about">About &nbsp;</a>
            <a href="/projects">Projects &nbsp;</a>
        </div>
    );
}

export default NavBar;
