//1) Tener la variable React en scope
import React from 'react';

//2) Tener la vaiable ReactDOM en scope
import ReactDOM from "react-dom";

//3) Tener un elemento de React
import App from "./app";

//4) Tener una función render corriendo
//React.DOM.render(a,document.querySelector("#root"))
ReactDOM.render(<App/>,document.getElementById('root'))