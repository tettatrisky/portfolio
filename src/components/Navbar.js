export default function Navbar() {
    return (
        <nav className="navbar bg-gradient-to-r from-purple-500 to-pink-500 py-12">
          <div className="container flex mx-auto">
    
            <div className="w-3/12">
    
            <div className="logo text-white uppercase font-bold tracking-widest text-center text-2xl ">Nando.inc</div>
            </div>
    
            <div className="w-6/12">
            <div className="nav flex justify-center text-lg space-x-10">
              <a className="nav-item text-white text-opacity-90 font-semibold" href="#">Profile</a>
              <a className="nav-item text-white text-opacity-90 font-semibold" href="#">Menu</a>
              <a className="nav-item text-white text-opacity-90 font-semibold" href="#">Link</a>
              <a className="nav-item text-white text-opacity-90 font-semibold" href="#">Search</a>
            </div>
            </div>
    
            <div className="w-3/12">
            <div className="button">
              <button className="border-2 rounded-full px-6 border-white bg-white text-rose-600 font-semibold my-1 mx-24">Let's do!</button>
            </div>
            </div>
          </div>
        </nav>
      )
}