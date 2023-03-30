import { Link } from "react-router-dom";



export default function Header (props) {
 
    return <>
        <h1 style={{ backgroundColor: "#4297A0" }} className="text-rose-400 text-4xl" id="header">BookScope</h1>
        <div className="navigation text-white text-xl">
        <Link className="Link text-xl font-mono font-semibold" to="/">Home{props.books}</Link>
        </div>
        <div className="navigation text-white">
        <Link className="Link text-xl font-mono font-semibold" to="/Bookcase" >Bookcase</Link>
        </div>
        <div className="navigation text-white" >
        <Link  className="Link text-xl font-mono font-semibold" to="/About">About</Link>
        </div>
        </>
}