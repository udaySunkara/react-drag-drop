import React from "react";

export default class DragContainer extends React.Component {
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
        };
    }

    handleDragStart(event, card, index) {
        event.dataTransfer.setData("currentCard", JSON.stringify(card));
    }

    render() {
        return (
            <div className="drag-container">
                {(this.state.cardList || []).map((card, i) => (
                    <div
                        className="drag-container__item"
                        draggable
                        onDragStart={(event) =>
                            this.handleDragStart(event, card, i)
                        }
                        key={card.id}
                    >
                        <div className="drag-container__item-row">
                            <div className="drag-container__item-row__id">
                                {card.id}
                            </div>
                            <div>{card.name}</div>
                        </div>
                        <div>{card.address}</div>
                    </div>
                ))}
            </div>
        );
    }
}
