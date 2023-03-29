import { Link } from "react-router-dom";



export default function Header (props) {
 
    return <>
        <h1 style={{ backgroundColor: "#4297A0" }} className="text-rose-400 text-4xl" id="header">BookScope</h1>
        <div>
        <Link to="/">Home{props.books}</Link>
        </div>
        <div>
        <Link to="/Bookcase" >Bookcase</Link>
        </div>
        <div>
        <Link to="/About">About</Link>
        </div>
        </>
}