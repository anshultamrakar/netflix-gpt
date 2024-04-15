import { useState } from "react"
import Headers from "./Header"

const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true) 


  const handleToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
    return(
        <div>
          <Headers/>
          <div className="absolute">
          <img  src = "https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt = "logo"/>
          </div>
          <form className="w-3/12 absolute my-36 mx-auto left-0 right-0 p-12 bg-black text-white opacity-85">
            <h1 className="text-3xl font-bold">{isSignInForm ? "Sign In" : "Sign up"}</h1>
            {!isSignInForm && <input type = "text" placeholder="Full Name" className="p-2 my-4  w-full bg-gray-700"/>}
            <input type = "text" placeholder="Email Address" className="p-2 my-4  w-full bg-gray-700"/>
            <input type = "password" placeholder="Password" className="p-2 my-4  w-full bg-gray-700"/>
            <button className="p-4 my-6 bg-red-700 rounded w-full">{isSignInForm ? "Sign In" : "Sign up"}</button>
            <p  onClick={handleToggleSignInForm} className="py-4 cursor-pointer">{isSignInForm ? "New to Netflix? Sign Up now" : "Alredy Registered? Sign In Now" }</p>
          </form>
         
        </div>
    )
}


export default Login 