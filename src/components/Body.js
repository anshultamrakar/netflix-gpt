import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from "./Login"
import Browser from "./Browser"

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
    return(
        <div>
         <RouterProvider router={appRouter} />
        </div>
    )
}


export default Body