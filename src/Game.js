import React from 'react';
import NIWLBanner from './components/NIWLBanner';
import Board from './components/Board';
import GameOverBanner from './components/GameOverBanner';
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
        this.gameOverBannerRef = React.createRef();
        this.keyboardRef = React.createRef();
    }

    render() {
        return (
            <div className="w-screen h-screen bg-grey grid grid-cols-1 content-evenly">
                <div>
                    <div className="flex justify-center text-4xl font-bold font-wider text-white -mt-10">
                        <span className="text-green">W</span><span className="text-yellow">O</span>R<span className="text-yellow">D</span><span className="text-green">L</span>E
                    </div>
                </div>
                <NIWLBanner ref={this.NIWLBannerRef} />
                <Board ref={this.boardRef} keyboardRef={this.keyboardRef} NIWLBannerRef={this.NIWLBannerRef} gameOverBannerRef={this.gameOverBannerRef}/>
                <GameOverBanner ref={this.gameOverBannerRef} />
                <Keyboard ref={this.keyboardRef} boardRef={this.boardRef} sendKey={this.sendKey}/>
            </div>
        );
    }
}

export default Game;
