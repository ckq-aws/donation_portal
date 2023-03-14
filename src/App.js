import './App.css';
import Greet from './components/Hello';
import Organizations from './components/organizations'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import NavToolBar from './components/navbar';

const Router = createBrowserRouter([
  {
    path: "/home", 
    element: <Greet />
  },
  {
    path: "/orgs",
    element: <Organizations />
  },
  {
    path: "/about",
    element: <></>
  }
])



function App() {
  return (
    <div className="App">
      <NavToolBar />
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;

