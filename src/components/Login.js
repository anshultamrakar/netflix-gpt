import Headers from "./Header"

const Login = () => {
    return(
        <div>
          <Headers/>
          <div className="absolute">
          <img  src = "https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt = "logo"/>
          </div>
          <form className="relative p-12 bg-black">
            <input type = "text" placeholder="Email Address" className="p-2 m-2"/>
            <input type = "text" placeholder="Password" className="p-2 m-2"/>
            <button className="p-4 m-4">Submit</button>
          </form>
         
        </div>
    )
}


export default Login