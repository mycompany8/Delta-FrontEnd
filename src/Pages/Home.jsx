import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const[navBg, setNavbg] = useState("bg-transparent")
  var targetref = useRef(null)
  var targetnav = useRef(null)

  let handleSrcoll = ()=>{
    const navheight = targetnav.current.offsetHeight
    const top = targetref.current.getBoundingClientRect().top;
    if(top<=navheight){
      setNavbg("bg-black")
    }
    else{
      setNavbg("bg-transparent")
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",handleSrcoll);
    return ()=> window.removeEventListener("scroll",handleSrcoll);  

  },[]);
  return (
    <div className="relative w-fit h-fit md:w-screen md:h-screen">
      {/* Background Image (fixed) */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.9), transparent), url('/Images/home-first.jpg')",
        }}
      ></div>

      {/* Navbar (fixed) */}

    
      <div className={`fixed top-0 w-full flex justify-end items-center px-14 py-3 z-20 ${navBg} border-2`}>
        <div className="flex justify-end md:hidden">
            <img src="/Images/Hamburger.png"className=" " >
          
        </img>
        
      </div>
        
        <ul className="hidden md:flex space-x-4 text-white text-sm font-medium" ref={targetnav}>
          <li>About</li>
          <li>Menu</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
        <ul className="hidden md:flex text-white text-sm">
          <li>
            <img src="/Images/facebook.png" alt="fb" className="w-5 h-5" />
          </li>
          <li>
            <img src="/Images/Instagram.png" alt="insta" className="w-5 h-5" />
          </li>
        </ul>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 pt-5 px-12 overflow-y-auto h-screen">
        <div className="">
          <img src="/Images/DeltaImage.png" className="w-24 h-14  lg:w-40 lg:h-28 " alt="logo" />
        </div>
        <div className="mt-10 p-3">
          <h1 className="text-6xl font-bold">Baking Kozhikode’s</h1>
          <h1 className="text-6xl font-bold text-orange-500 mt-1">
            Sweetest Memories
          </h1>
          <p className="font-normal text-gray-600 mt-3">
            "From the heart of Kozhikode, Delta Bakery brings you fresh bread,
            <br />
            delightful sweets, and grand spreads for life’s biggest
            celebrations.
            <br />
            Perfect for weddings, perfect for memories."
          </p>
          <div className="flex space-x-3 mt-3">
            <button className="w-28 h-12 rounded bg-orange-500 text-white hover:bg-orange-700">
              Contact us
            </button>
            <button className="w-28 h-12 rounded bg-transparent border-2 border-black hover:bg-black text-black hover:text-white">
              View Menu
            </button>
          </div>
        </div>

        {/* Add extra content so scrolling is visible */}
      </div>
      <div className="bg-yellow-50 w-screen h-screen" ref={targetref}>
          <div className="">

          </div>
      </div>
    </div>
  );
}
