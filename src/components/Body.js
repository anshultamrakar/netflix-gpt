import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { useEffect } from "react";
import Login from "./Login"
import Browser from "./Browser"
import { auth } from "../utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser , removeUser} from "../utils/userSlice"



const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/> ,
    },
    {
        path : "/browser",
        element : <Browser/>
    }
  ]);





const Body = () => { 
const dispatch= useDispatch()
  useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email , displayName} = user
        dispatch(addUser({uid , email , displayName }))
       
      } else {
         dispatch(removeUser())
      }
    });
  },[])
    return(
        <div>
         <RouterProvider router={appRouter} />
        </div>
    )
}


export default Body