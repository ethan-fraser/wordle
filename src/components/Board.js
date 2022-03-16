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

function cellFactory() {
    return {
        evaluation: "empty",
        value: "",
    }
}

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cells: [],
            cellRows: [],
            currentGuess: 0,
            correctWord: fiveletterwords[Math.floor(Math.random() * (fiveletterwords.length))],
        }
        for (let i = 0; i < 6; i++) {
            let temp = [];
            for (let i = 0; i < 5; i++) {
                temp.push(cellFactory())
            }
            this.state.cells.push(temp);
        }
        this.cellRowRefs = [];
        for (let i = 0; i < 6; i++) {
            this.cellRowRefs.push(React.createRef());
            this.state.cellRows.push(<CellRow key={i} ref={this.cellRowRefs[i]} cells={this.state.cells[i]}/>)
        }
    }

    handleKeydown(event) {
        if ("QWERTYUIOPASDFGHJKLZXCVBNM".includes(event.key.toUpperCase())) {
            this.boardRef.current.updateCellValue(event.key.toUpperCase());
        }
        if (event.key === "Backspace") {
            this.boardRef.current.updateCellValue("⌫");
        }
        if (event.key === "Enter") {
            this.boardRef.current.updateCellValue("Enter");
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
        window.boardRef = this.props.boardRef;
    }

    evaluate() {

        let guess = this.cellRowRefs[this.state.currentGuess].current.getRowAsString();

        if (fiveletterwords.indexOf(guess) === -1) {
            // invalid guess
            this.props.NIWLBannerRef.current.show();
            this.cellRowRefs[this.state.currentGuess].current.shake();
            return false;
        }

        // work out initial colours of cells
        for (let i = 0; i < this.state.correctWord.length; i++) {
            if (guess[i] === this.state.correctWord[i]){
                this.cellRowRefs[this.state.currentGuess].current.updateCellEvaluation(i, "correct");
                this.props.keyboardRef.current.setKeyState(guess[i].toUpperCase(), "correct");
            } else if (this.state.correctWord.indexOf(guess[i]) > -1) {
                this.cellRowRefs[this.state.currentGuess].current.updateCellEvaluation(i, "present");
                this.props.keyboardRef.current.setKeyState(guess[i].toUpperCase(), "present");
            } else {
                this.cellRowRefs[this.state.currentGuess].current.updateCellEvaluation(i, "empty");
                this.props.keyboardRef.current.setKeyState(guess[i].toUpperCase(), "absent");
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
                    this.cellRowRefs[this.state.currentGuess].current.updateCellEvaluation(i, "empty");
                    this.props.keyboardRef.current.setKeyState(this.state.correctWord[i].toUpperCase(), "absent")
                }
            }
        }

        return false;

    }

    updateCellValue(newValue) {
        let newLine = this.cellRowRefs[this.state.currentGuess].current.updateCellValue(newValue);
        if (newLine) {
            let evaluation = this.evaluate();
            if (evaluation) {
                this.props.keyboardRef.current.setDisabled(true);
                window.removeEventListener('keydown', this.handleKeydown);
            } else {
                this.setState({
                    currentGuess: this.state.currentGuess + 1,
                })
                if (this.state.currentGuess === 5) {
                    this.props.gameOverBannerRef.current.show(this.state.correctWord.toUpperCase());
                }
            }
            if (this.state.currentGuess === 5) {
                this.props.keyboardRef.current.setDisabled(true);
                window.removeEventListener('keydown', this.handleKeydown);
            }
        }
    }

    updateCellEvaluation(i, newEval) {
        this.cellRowRefs[this.state.currentGuess].current.updateCellEvaluation(i, newEval);
    }

    render() {
        console.log(this.state.currentGuess)
        return (
            <div className="flex flex-col content-center gap-1">
                {this.state.cellRows}
            </div>
        );
    }

}

export default Board;