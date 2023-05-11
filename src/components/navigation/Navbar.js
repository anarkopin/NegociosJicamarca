
import logo from "../../assets/img/logo.png";


function Navbar() {
    return (
        <div>
            <div className="md:justify-center md:flex md:items-center md:gap-12">
                    <a className="block text-teal-600" href="/">
                    <span className="sr-only">Home</span>
                    <img 
                        alt="Logo"
                        src={logo}

                    />
                    </a>
            </div>
            <header aria-label="Site Header" className="flex justify-center bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                
                    <div className="hidden md:block">
                        <nav aria-label="Site Nav">
                        <ul className="flex items-center gap-6 text-sm lg:text-lg">
                        </ul>
                        </nav>
                    </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar;