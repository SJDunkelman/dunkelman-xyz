import React, {useState} from "react";
import hamburgerIcon from "../images/icons/bars.svg";
import closeIcon from "../images/icons/xmark.svg";
import leftChevronIcon from "../images/icons/chevron-left.svg";
import useWindowDimensions from "./utils/useWindowDimensions";


export default function NavigationBar(){
    const [isOpen, setisOpen] = useState(false);

    function handleClick() {
      console.log('Clicked!');
      setisOpen(!isOpen);
    }

    const {width, height} = useWindowDimensions();
    

    console.log(isOpen);
    return (
        <header className="w-full">
          <nav className="py-6 flex justify-between items-center px-2">
            <a href="/#portfolio">
                <img src={leftChevronIcon} alt="Go back home" className="h-6" />
            </a>
            <div className="flex justify-between items-center">
              {/* Desktop Links */}
              <ul className="hidden lg:flex items-center w-auto whitespace-nowrap lg:space-x-12">
                <a href="/#about">
                  <li className="no-underline font-light hover:underline underline-offset-4e">About</li>
                  </a>
                <a href="/#services">
                  <li className="no-underline font-light hover:underline underline-offset-4">Services</li>
                </a>
                <a href="/#clients">
                  <li className="no-underline font-light hover:underline underline-offset-4">Portfolio</li>
                </a>
                <a href="/#contact">
                  <li className="no-underline font-light hover:underline underline-offset-4">Contact</li>
                </a>
              </ul> 
              {/* Mobile */}
              <button className="lg:hidden" onClick={() => setisOpen(!isOpen)} >
                  {isOpen && (<img src={hamburgerIcon} alt="Open Mobile menu" className="h-8" />)}
                  {!isOpen && (<img src={closeIcon} alt="Close Mobile Menu" className="h-8" />)}
                </button>
            </div>
          </nav>
          <div className={`lg:hidden space-y-4 mt-4 ${isOpen ? "flex flex-col" : "hidden"}`}>
              <ul className="bg-primary rounded-lg w-full text-center">
                <a href="/#about">
                  <li className="my-1 py-2 rounded-lg font-bold border-2 border-light-grey text-grey hover:bg-light-teal hover:text-white">About</li>
                </a>
                <a href="/#services">
                  <li className="my-1 py-2 rounded-lg font-bold border-2 border-light-grey text-grey hover:bg-orange hover:text-white">Services</li>
                </a>
                <a href="/#portfolio">
                  <li className="my-1 py-2 rounded-lg font-bold border-2 border-light-grey text-grey hover:bg-green hover:text-white">Portfolio</li>
                </a>
                <a href="/#contact">
                  <li className="my-1 py-2 rounded-lg font-bold border-2 border-light-grey text-grey hover:bg-purple hover:text-white">Contact</li>
                </a>
              </ul>
            </div>
        </header>
      )
}