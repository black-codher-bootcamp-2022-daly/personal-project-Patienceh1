import { Link } from "react-router-dom";



export default function Header (props) {
 
    return <>
        <h1 style={{ backgroundColor: "pink" }}>Patience's Book Case</h1>
        <div>
        <Link to="/Home">Home{props.books}</Link>
        </div>
        <div>
        <Link to="/Bookcase" >Bookcase</Link>
        </div>
        <div>
        <Link to="/About">About</Link>
        </div>
        </>
}