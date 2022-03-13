import React from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';

class Game extends React.Component {

    constructor() {
        super();
        this.state = {
            cells: [],
            keys: [],
        };

        this.boardRef = React.createRef();
        this.keyboardRef = React.createRef();
    }

    render() {
        return (
            <div className="w-screen h-screen bg-grey grid grid-cols-1 content-evenly">
                <Board ref={this.boardRef} keyboardRef={this.keyboardRef} />
                <Keyboard ref={this.keyboardRef} boardRef={this.boardRef} sendKey={this.sendKey}/>
            </div>
        );
    }
}

export default Game;
