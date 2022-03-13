import React from 'react';
import CellRow from './CellRow';
import fiveletterwords from '../fiveletterwords';

// returns indeces of letter in word except for the one at currentindex
function getOtherIndecesOfLetter(word, letter, currentindex) {
    let indeces = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter && currentindex !== i) {
            indeces.push(i)
        }
    }
    return indeces
}

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cellRows: [],
            currentGuess: 0,
            correctWord: "whole",
        }
        this.cellRowRefs = [];
        for (let i = 0; i < 6; i++) {
            this.cellRowRefs.push(React.createRef());
            this.state.cellRows.push(<CellRow key={i} ref={this.cellRowRefs[i]} cells={this.props.cells[i]}/>)
        }
    }

    evaluate() {

        let guess = this.cellRowRefs[this.state.currentGuess].current.getRowAsString();

        if (fiveletterwords.indexOf(guess) === -1) {
            // invalid guess
            console.log("invalid guess");
            // this.props.NIWLRef.current.show();
        }

        // work out initial colours of cells
        for (let i = 0; i < this.state.correctWord.length; i++) {
            if (guess[i] === this.state.correctWord[i]){
                this.cellRowRefs[this.state.currentGuess].current.updateCellEvaluation(i, "correct");
            } else if (this.state.correctWord.indexOf(guess[i]) > -1) {
                this.cellRowRefs[this.state.currentGuess].current.updateCellEvaluation(i, "present");
            } else {
                this.cellRowRefs[this.state.currentGuess].current.updateCellEvaluation(i, "absent");
            }
        }

        if (guess === this.state.correctWord) {
            return true;
        }

        // make sure yellows are changed to grey if they already got that letter in this guess
        for (let i = 0; i < this.state.correctWord.length; i++) {
            if (this.state.correctWord.indexOf(guess[i]) > -1) {
                let allInstancesFound = false
                let instances = getOtherIndecesOfLetter(this.state.correctWord, guess[i], i)
                for (let j = 0; j < instances.length; j++) {
                    if (guess[instances[j]] === this.state.correctWord[instances[j]]) {
                        allInstancesFound = true
                    }
                }
                if (allInstancesFound) {
                    this.cellRowRefs[this.state.currentGuess].current.updateCellEvaluation(i, "absent");
                }
            }
        }

        return false;

    }

    updateCellValue(newValue) {
        let endOfRow = this.cellRowRefs[this.state.currentGuess].current.updateCellValue(newValue);
        if (endOfRow) {
            let evaluation = this.evaluate();
            if (evaluation) {
                this.props.keyboardRef.current.setDisabled(true);
            }
            this.setState({
                currentGuess: this.state.currentGuess + 1
            })
        }
        if (this.state.currentGuess === 6) {
            // TODO: game over here
            console.log("game over")
        }
    }

    updateCellEvaluation(i, newEval) {
        this.cellRowRefs[this.state.currentGuess].current.updateCellEvaluation(i, newEval);
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