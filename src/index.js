import React from "react";
import ReactDOM from "react-dom";
//step 1 Import react-router functions
//Add NavLink to import
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";


// Add basic stying for NavLinks
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};
/* define the NavBar component */
function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Messages
        </NavLink>
        <NavLink
              to="/messages"
              exact
              style={linkStyles}
              activeStyle={{
                background: "darkblue",
              }}
          >

        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Signup
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>

   
    </div>
  );
}



function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}
function About(){
  return(
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}

function Messages(){
  return(
    <div>
      <h1>Here are your messages!</h1>
    </div>
  );
}


function Login(){
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="username"/>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password"/>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

function Signup(){
  return(
    <div>
       <div>
      <h1>Signup</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="username"/>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password"/>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
    </div>
    )
}

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
<NavBar/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About/>} />
  <Route path="/messages" element={<Messages/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/signup" element={<Signup/>} />
  </Routes>
  </BrowserRouter>,
 document.getElementById("root")
 );
