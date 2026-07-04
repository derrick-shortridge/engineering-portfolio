import { link } from "framer-motion/client";


function Navbar() {
    const links = [
        "Home",
        "About",
        "Projects",
        "Contact"
    ];
    return(
        <nav className =" bg-black/70 flex justify-between items-center p-4 sticky top-0 backdrop-blur-2xl">
            <div className="font-bold text-xl text-white">Derrick Shortridge</div>
            <ul className="flex gap-6 text-sm">
                {links.map((link) => (
                    <li key={link}><a href="#" className="text-white hover:text-blue-400">{link}</a></li>
                ))}
            </ul>
        </nav>
    );
    

}

export default Navbar