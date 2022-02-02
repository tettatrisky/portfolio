import Button from "./Button";
import Navbar from "./Navbar";

function HeroSection() {
    return(
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-[550px]">
            <div className="container mx-auto"> 
                <Navbar/>
                <div className="text-center text-white mt-12 w-8/12 mx-auto">
                    <h1 className="text-3xl font-semibold leading-relaxed font-mono">Saya seorang front-end engineer, back-end engineer, dan juga UI designer</h1>
                    <p className="leading-relaxed text-sm text-stone-300 font-sans">Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI design</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;