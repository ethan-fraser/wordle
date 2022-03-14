import React from 'react';

class GameOverBanner extends React.Component {

    constructor() {
        super()
        this.state = {
            correctWord: "",
            hidden: true,
        };
    }

    show(word) {
        this.setState({
            correctWord: word,
            hidden: false,
        })
    }
    
    render() {
        let hiddenClass;
        if (this.state.hidden) {
            hiddenClass = "hidden"
        } else {
            hiddenClass = ""
        }
        return (
            <div className={"grid grid-cols-1 justify-self-center bg-white content-center px-5 py-4 rounded shadow-xl " + hiddenClass}>
                <b>{this.state.correctWord}</b>
            </div>
        );
    }

}

export default GameOverBanner;