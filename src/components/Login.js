import { useState , useRef } from "react"
import { checkValidate } from "../utils/Validate"
import Headers from "./Header"
import { auth } from "../utils/Firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [isSignInForm , setIsSignInForm] = useState(true) 
  const [errorMessage , setErrorMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick = () => {
    const message = checkValidate(email.current.value , password.current.value)
    setErrorMessage(message)
    if(message) return 
    
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      const user = userCredential.user;
      navigate("/browser")
      
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "" + errorMessage)
  });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
   navigate("/browser")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "" + errorMessage)
  });
    }
  }

  const handleToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

    return(
        <div>
          <Headers/>
          <div className="absolute">
          <img  src = "https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt = "logo"/>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute my-36 mx-auto left-0 right-0 p-12 bg-black text-white opacity-85">
            <h1 className="text-3xl font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type = "text" placeholder="Full Name" className="p-2 my-4  w-full bg-gray-700"/>}
            <input type = "text" placeholder="Email Address" className="p-2 my-4  w-full bg-gray-700" ref ={email}/>
            <input type = "password" placeholder="Password" className="p-2 my-4  w-full bg-gray-700" ref ={password}/>
            <button onClick={handleButtonClick} className="p-4 my-6 bg-red-700 rounded w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="text-red-500">{errorMessage}</p>
            <p onClick={handleToggleSignInForm} className="py-4 cursor-pointer">{isSignInForm ? "New to Netflix? Sign Up Now" : "Alredy Registered? Sign In Now" }</p>
          </form> 
        </div>
    )
}


export default Login 