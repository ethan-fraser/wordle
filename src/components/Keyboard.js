import React from 'react';
import Key from './Key';

function keyboardFactory() {
    const keys = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
    ]
    const rows = keys.map((row) => {
        return row.map((key) => {
                return {
                    value: key,
                    state: "empty"
                }
            });
    });

    return rows
}

class Keyboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            disabled: false,
            keys: keyboardFactory(),
        }
    }

    findKey(query) {
        for (let i = 0; i < this.state.keys.length; i++) {
            for (let j = 0; j < this.state.keys[i].length; j++) {
                if (this.state.keys[i][j].value === query) {
                    return [i, j]
                }
            }
        }
        return [-1, -1];
    }

    setDisabled(value) {
        this.setState({
            disabled: value,
        })
    }

    setKeyState(keyValue, newState) {
        let targetKeyPosition = this.findKey(keyValue);
        // key not found? how?
        if (targetKeyPosition.indexOf(-1) > -1) {
            console.log("key not found??")
        }
        let tempKeys = [...this.state.keys];
        tempKeys[targetKeyPosition[0]][targetKeyPosition[1]].state = newState;
        this.setState({
            keys: tempKeys,
        })
    }

    render() {
        const rows = this.state.keys.map((row, i) => {
            return (
                <div key={i} className="flex justify-center gap-1">
                    {row.map((key, j) => {
                        return <Key
                            key={j} 
                            value={key.value}
                            state={key.state}
                            sendKey={this.props.sendKey}
                            boardRef={this.props.boardRef}
                            disabled={this.state.disabled}/>
                    })}
                </div>
            );
        });
        return (
            <div className="flex flex-col content-center gap-1">
                {rows}
            </div>
        );
    }
}

export default Keyboard;