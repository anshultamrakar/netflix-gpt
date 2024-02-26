import Body from "./components/Body";
import {createBrowserRouter , RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browser from "./components/Browser";

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Body/>
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/browser",
    element : <Browser/>
  }
])

const App = () =>  {
  return (
   <RouterProvider router = {appRouter} />
  );
}

export default App;
