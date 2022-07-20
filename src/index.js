import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function App() {
  return <Home />;
}

ReactDOM.render(<BrowserRouter>
<Route path="/">
<Home />
</Route>
</BrowserRouter>, 
document.getElementById("root"));
