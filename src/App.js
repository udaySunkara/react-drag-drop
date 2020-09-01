import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import DragContainer from "./components/dragContainer/dragContainer";
import DropContainer from "./components/droppable-container/dropContainer";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            cardList: [
                {
                    id: 1,
                    name: "Uday",
                    address: "Lorem ipsum dummy text - 947934",
                },
                {
                    id: 2,
                    name: "Uday",
                    address: "Lorem ipsum dummy text - 947934",
                },
                {
                    id: 3,
                    name: "Uday",
                    address: "Lorem ipsum dummy text - 947934",
                },
                {
                    id: 4,
                    name: "Uday",
                    address: "Lorem ipsum dummy text - 947934",
                },
                {
                    id: 5,
                    name: "Uday",
                    address: "Lorem ipsum dummy text - 947934",
                },
            ],
            currentCardIndex: -1,
        };
        this.setCurrentIndex = this.setCurrentIndex.bind(this);
        this.removeDroppedCard = this.removeDroppedCard.bind(this);
    }

    setCurrentIndex(currentIndex) {
        this.setState({ ...this.state, currentCardIndex: currentIndex });
    }

    removeDroppedCard() {
        var cards = this.state.cardList;
        cards.splice(this.state.currentCardIndex, 1);
        this.setState({ ...this.state, cardList: cards });
    }

    render() {
        return (
            <div className="App">
                <DragContainer
                    cardList={this.state.cardList}
                    setCurrentIndex={this.setCurrentIndex}
                ></DragContainer>
                <DropContainer
                    removeDroppedCard={this.removeDroppedCard}
                ></DropContainer>
            </div>
        );
    }
}

export default App;
