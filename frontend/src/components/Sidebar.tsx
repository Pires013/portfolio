import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";

import "./../styles/Sidebar.css";

function Sidebar() {

    return (

        <aside className="sidebar">

            <a
                href="https://github.com/Pires013"
                target="_blank"
            >
                <FaGithub />
            </a>

            <a
                href="https://www.linkedin.com/in/matheus-pires-3b17b3240/"
                target="_blank"
            >
                <FaLinkedin />
            </a>

            <a href="mailto:matheuspireespc@gmail.com">
                <FaEnvelope />
            </a>

            <div className="sidebar__language">

                <button>🇧🇷</button>

                <button>🇺🇸</button>

            </div>

        </aside>

    );

}

export default Sidebar;