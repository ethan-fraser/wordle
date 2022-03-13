import React from 'react';
import Key from './Key';

class Keyboard extends React.Component {

    render() {
        const rows = this.props.keys.map((row, i) => {
            return (
                <div key={i} className="flex justify-center gap-1">
                    {row.map((key, j) => {
                        return <Key key={j} value={key.value} state={key.state} sendKey={this.props.sendKey} boardRef={this.props.boardRef}/>
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