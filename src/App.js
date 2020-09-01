import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import DragContainer from "./components/dragContainer/dragContainer";
import DropContainer from "./components/droppable-container/dropContainer";

function App() {
    return (
        <div className="App">
            <DragContainer></DragContainer>
            <DropContainer></DropContainer>
        </div>
    );
}

export default App;
