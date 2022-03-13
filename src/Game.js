import React from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';


function cellFactory() {
    return {
        evaluation: "empty",
        value: "",
    }
}

function keyboardFactory() {
    const keys = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
    ]
    const rows = keys.map((row, i) => {
        return row.map((key, j) => {
                return {
                    value: key,
                    state: "empty"
                }
            });
    });

    return rows
}

class Game extends React.Component {

    constructor() {
        super();
        this.state = {
            cells: [],
            keys: [],
            keyboardDisabled: false,
        };
        for (let i = 0; i < 6; i++) {
            let temp = [];
            for (let i = 0; i < 5; i++) {
                temp.push(cellFactory())
            }
            this.state.cells.push(temp);
        }
        this.state.keys = keyboardFactory();

        this.boardRef = React.createRef();
        this.keyboardRef = React.createRef();
    }

    render() {
        return (
            <div className="w-screen h-screen bg-grey grid grid-cols-1 content-evenly">
                <Board ref={this.boardRef} keyboardRef={this.keyboardRef} cells={this.state.cells} />
                <Keyboard ref={this.keyboardRef} boardRef={this.boardRef} keys={this.state.keys} sendKey={this.sendKey}/>
            </div>
        );
    }
}

export default Game;
