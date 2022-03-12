import React from 'react';
import Cell from './Cell'

class CellRow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cells: [],
            currentLetter: 0,
        }
        this.cellRefs = [];
        this.state.cells = this.props.cells.map((cell, i) => {
            this.cellRefs.push(React.createRef());
            return <Cell key={i} ref={this.cellRefs[i]} value={cell.value} evaluation={cell.evaluation} />
        })
        this.state.cells.push(<div></div>)
        this.cellRefs.push(React.createRef())
    }

    updateCellValue(newValue) {
        if (newValue === "⌫") {
            if (this.state.currentLetter === 0) {
                return false
            }
            this.cellRefs[this.state.currentLetter].current.updateValue("");
            this.setState({
                currentLetter: this.state.currentLetter - 1,
            })

            console.log(this.state.currentLetter)
        } else if (newValue === "Enter") {
            
        } else {
            this.cellRefs[this.state.currentLetter].current.updateValue(newValue);
            if (this.state.currentLetter === 4) {
                return true;
            } else {
                this.setState({
                    currentLetter: this.state.currentLetter + 1
                })
                return false;
            }
        }
    }

    updateCellEvaluation(newEval) {
        this.cellRefs[this.state.currentLetter].current.updateEvaluation(newEval);
    }

    render() {
        return (
            <div className="flex justify-center gap-1">
                {this.state.cells}
            </div>
        );
    }
}

export default CellRow;