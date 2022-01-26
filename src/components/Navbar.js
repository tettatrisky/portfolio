import Logo from "./Logo.js";
import Nav from "./Nav.js";
import Button from "./Button.js";



export default function Navbar() {
    return (
        // Navbar
        <nav className="navbar bg-gradient-to-r from-purple-500 to-pink-500 py-12">
          <div className="container flex mx-auto">

            {/* Logo */}
            <div className="w-3/12">
              <Logo/>
            </div>
    
            
            {/* NavItem */}
            <div className="w-6/12">
              <Nav/>
            </div>

            {/* Button */}
            <div className="w-3/12">
              <Button/>
            </div>
          </div>
        </nav>
      )
}