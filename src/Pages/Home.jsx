import React from "react";

export default function Home() {
  return (
<div
  className="w-screen h-screen  bg-cover bg-no-repeat px-12"
  style={{
    backgroundImage:
      "linear-gradient(to  right, rgba(255,255,255,10), transparent), url('/Images/home-first.jpg')"
  }}
>
  {/* Your content here */}
      <div className="bg-transparent  border-2 flex justify-end  pr-10 items-center space-x-5 pt-3" >
        <ul className="flex space-x-5 text-white text-sm font-medium">
  <li>About</li>
  <li>Menu</li>
    <li>Gallery</li>
  <li>Contact</li>

        </ul>

        <ul className="flex text-white text-sm">
  <li><img src="/Images/facebook.png"></img></li>
 <li><img src="/Images/Instagram.png"></img></li>

        </ul>
      </div>
      <div className="border-2">
<img src="/Images/DeltaImage.png" className="w-40 h-28"></img>
      </div>
      <div className="border-2 mt-10">
sds
      </div>
      
    </div>
  )
}
