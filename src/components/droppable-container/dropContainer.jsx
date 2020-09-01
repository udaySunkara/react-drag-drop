import React from "react";

export default class DropContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        };
        this.dragOver = this.dragOver.bind(this);
        this.drop = this.drop.bind(this);
    }

    dragOver(event) {
        event.preventDefault();
    }

    drop(event) {
        var currentCard = JSON.parse(event.dataTransfer.getData("currentCard"));
        var cards = this.state.cards;
        console.log(currentCard);
        if (currentCard) {
            cards.push(currentCard);
            this.setState({ cards: cards });
            this.props.removeDroppedCard();
        }
    }

    render() {
        return (
            <div
                className="drop-container"
                onDragOver={(evnt) => this.dragOver(evnt)}
                onDrop={(evnt) => this.drop(evnt)}
            >
                <h1>Drop the component here</h1>
                {(this.state.cards || []).map((card) => {
                    return (
                        <div key={`drop-${card.id}`}>
                            <span>{card.id}</span>
                            <span>{card.name}</span>
                            <span>{card.address}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
}
