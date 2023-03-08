import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>
        <nav>
            <Link to="html">HTML</Link>
            <Link to="css">CSS</Link>
            <Link to="javascript">JavaScript</Link>
            <Link to="react">React</Link>
            <Link to="headless-cms">Sanity</Link>
        </nav>
         </>
    )
}