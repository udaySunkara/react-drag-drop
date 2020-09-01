import React from "react";

export default class DragContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDragStart(event, card, index) {
        this.props.setCurrentIndex(index);
        event.dataTransfer.setData("currentCard", JSON.stringify(card));
    }

    render() {
        return (
            <div className="drag-container">
                {(this.props.cardList || []).map((card, i) => (
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
