import { Link, NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link> {/* Tự động highlight khi trang active */}
        </nav>
    );
};

export default Navigation;