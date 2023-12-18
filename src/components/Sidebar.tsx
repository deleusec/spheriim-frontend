import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div>
            <div>
                <Link className="font-bold text-[40px]" to="/">Spher<span className="bg-gradient-to-b from-primary to-[#F1B575] inline-block text-transparent bg-clip-text">IIM</span></Link>
            </div>
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
        </div>
    );
}

export default Sidebar;