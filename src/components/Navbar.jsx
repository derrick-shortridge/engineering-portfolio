

function Navbar() {
    return(
        <nav className =" bg-black flex justify-between items-center p-4 sticky top-0 backdrop-blur-2xl">
            <div className="font-bold text-xl text-white">Derrick</div>
            <div className="flex gap-6 text-sm">
                <a href="#" className="text-white hover:text-blue-400">Home</a>
                <a href="#" className="text-white hover:text-blue-400">About</a>
                <a href="#" className="text-white hover:text-blue-400">Projects</a>
                <a href="#" className="text-white hover:text-blue-400">Contact</a>
            </div>
        </nav>
    )
    

}

export default Navbar