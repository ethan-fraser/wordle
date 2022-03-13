import React from 'react';
import CellRow from './CellRow';

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cellRows: [],
            currentGuess: 0,
        }
        this.cellRowRefs = [];
        for (let i = 0; i < 6; i++) {
            this.cellRowRefs.push(React.createRef());
            this.state.cellRows.push(<CellRow key={i} ref={this.cellRowRefs[i]} cells={this.props.cells[i]}/>)
        }
    }

    evaluate() {

    }

    updateCellValue(newValue) {
        let endOfRow = this.cellRowRefs[this.state.currentGuess].current.updateCellValue(newValue);
        if (endOfRow) {
            this.evaluate();
            this.setState({
                currentGuess: this.state.currentGuess + 1
            })
        }
        if (this.state.currentGuess === 6) {
            // TODO: game over here
            console.log("game over")
        }
    }

    updateCellEvaluation(row, col, newEval) {
        this.cellRowReffs[this.state.currentGuess].current.updateCellEvaluation(newEval);
    }

    render() {
        return (
            <div className="flex flex-col content-center gap-1">
                {this.state.cellRows}
            </div>
        );
    }

}

export default Board;