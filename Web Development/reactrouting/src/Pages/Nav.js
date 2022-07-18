import {Link} from "react-router-dom";
import logos from "../meetup.png";
import "./comps.css"
export default function Nav(){
    return(
        <div className="flex h-20 w-full shadow-lg align-middle shadow-cyan-50 justify-between ">

            <Link to={"/"} className="text-2xl mx-2 font-bold underline hover:bg-opacity-50 sm:no-underline md:text-xl md:mx-1"><img src={logos} className={"sm:w-25 sm:h-20"} alt={"logo"}/></Link>
            <div className={"flex justify-center my-6 mx-8"}>
                <Link to={"/about"}><h1 className="text-3xl mx-10 font-mono font-bold underline sm:no-underline ">About</h1></Link>
                <Link to={"/projects"}><h1 className="text-3xl mx-10 font-mono font-bold underline sm:no-underline ">Projects</h1></Link>
                <Link to={"/contact"}><h1 className="text-3xl mx-10 font-mono font-bold underline sm:no-underline ">Contact</h1></Link>
            </div>
        </div>
    )
}
