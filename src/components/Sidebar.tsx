import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="students">Students</Link>
                </li>
                <li>
                    <Link to="classes">Classes</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;