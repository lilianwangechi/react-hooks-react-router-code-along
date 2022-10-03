import React from "react";

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

export default Signup;