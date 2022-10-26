import React from "react";

function EmailButton() {
    return (
        <div>
            <button class="bg-transparent hover:bg-green-800 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                <a href="mailto:thmscly@gmail.com">thmscly@gmail.com</a>
            </button>
        </div>
    );
}

export default EmailButton;
