

function Navbar() {
    return(
        <nav className ="flex justify-between items-center p-4 ">
            <div className="font-bold text-xl">Derrick</div>
            <div className="flex gap-6 text-sm">
                <a href="#" className="text-black hover:text-blue-400">Home</a>
                <a href="#" className="text-black hover:text-blue-400">About</a>
                <a href="#" className="text-black hover:text-blue-400">Projects</a>
                <a href="#" className="text-black hover:text-blue-400">Contact</a>
            </div>
        </nav>
    )
    

}

export default Navbar