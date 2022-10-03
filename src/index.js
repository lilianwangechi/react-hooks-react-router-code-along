import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"
import App from "./App"
//step 1 Import react-router functions
//Add NavLink to import
//import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";


// Add basic stying for NavLinks









// function NavBar(){
//   return (
//     <div>
//       <h1>Navigation Bar</h1>
//     </div>
//   );
// }
// add the NavBar component to our render method
ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>,
 document.getElementById("root")
 );
