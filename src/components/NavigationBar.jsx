import React, {useState} from "react";
import hamburgerIcon from "../images/icons/bars.svg";
import closeIcon from "../images/icons/xmark.svg";
import leftChevronIcon from "../images/icons/chevron-left.svg";


export default function NavigationBar(){
    const [isOpen, setisOpen] = useState(false);

    function handleClick() {
      setisOpen(!isOpen);
    }

    return (
        <header className="w-full">
          <nav className="py-6 flex justify-between items-center">
            <a href="/#portfolio">
                <img src={leftChevronIcon} alt="Go back home" className="h-6" />
            </a>
            <div className="flex justify-between items-center">
              {/* Desktop Links */}
              <ul className="hidden lg:flex items-center w-auto whitespace-nowrap lg:space-x-12">
                <a href="/#about">
                  <li className="no-underline font-light hover:text-white">About</li>
                  </a>
                <a href="/#services">
                  <li className="no-underline font-light hover:text-white">Services</li>
                </a>
                <a href="/#clients">
                  <li className="no-underline font-light hover:text-white">Portfolio</li>
                </a>
                <a href="/#contact">
                  <li className="no-underline font-light hover:text-white">Contact</li>
                </a>
              </ul>
    
              {/* Mobile */}
              <button className="lg:hidden" onClick={handleClick}>
                {isOpen && (<img src={hamburgerIcon} alt="Open Mobile menu" />)}
                {!isOpen && (<img src={closeIcon} alt="Close Mobile Menu" />)}
              </button>
            </div>
            <div className={`lg:hidden space-y-4 mt-4 ${isOpen ? "flex flex-col" : "hidden"}`}>
              <ul className="bg-primary rounded-lg w-full text-center">
                <a href="/#about">
                  <li className="py-2 font-bold bg-light-grey text-white hover:text-deep-blue border-b-[1px] border-white">About</li>
                </a>
                <a href="/#services">
                  <li className="py-2 font-bold bg-light-grey text-white hover:text-deep-blue border-b-[1px] border-white">Services</li>
                </a>
                <a href="/#portfolio">
                  <li className="py-2 font-bold bg-light-grey text-white hover:text-deep-blue border-b-[1px] border-white">Portfolio</li>
                </a>
                <a href="/#contact">
                  <li className="py-2 font-bold bg-light-grey text-white hover:text-deep-blue border-b-[1px] border-white">Contact</li>
                </a>
              </ul>
            </div>
          </nav>
        </header>
      )
}