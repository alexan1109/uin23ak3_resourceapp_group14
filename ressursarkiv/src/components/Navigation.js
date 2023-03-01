import { Link } from "react-router-dom";


export default function Navigation(){
    return(
    <nav>
        <ul>
            <li>
                <Link to="html">HTML</Link>
                <Link to="javascript">JavaScript</Link>
                <Link to="react">React</Link>
                <Link to="headless-cms">Sanity</Link>
            </li>
        </ul>
    </nav>
    )
}


