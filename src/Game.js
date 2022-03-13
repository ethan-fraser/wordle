import React from 'react';
import NIWLBanner from './components/NIWLBanner';
import Board from './components/Board';
import Keyboard from './components/Keyboard';

class Game extends React.Component {

    constructor() {
        super();
        this.state = {
            cells: [],
            keys: [],
        };

        this.NIWLBannerRef = React.createRef();
        this.boardRef = React.createRef();
        this.keyboardRef = React.createRef();
    }

    render() {
        return (
            <div className="w-screen h-screen bg-grey grid grid-cols-1 content-evenly">
                <NIWLBanner ref={this.NIWLBannerRef} />
                <Board ref={this.boardRef} keyboardRef={this.keyboardRef} NIWLBannerRef={this.NIWLBannerRef}/>
                <Keyboard ref={this.keyboardRef} boardRef={this.boardRef} sendKey={this.sendKey}/>
            </div>
        );
    }
}

export default Game;
