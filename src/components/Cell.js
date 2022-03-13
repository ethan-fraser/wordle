import React from 'react';

class Cell extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value,
            evaluation: this.props.evaluation,
        }
    }

    updateValue(newValue) {
        this.setState({
            value: newValue,
        })
    }

    getValue() {
        return this.state.value;
    }

    updateEvaluation(newEval) {
        this.setState({
            evaluation: newEval,
        })
    }

    render() {
        var color;
        switch (this.state.evaluation) {
            case "absent":
                color = "bg-darkgrey";
                break;
            case "present":
                color = "bg-yellow";
                break;
            case "correct":
                color = "bg-green";
                break;
            case "empty":
            default:
                color = "bg-white";
                break;
        };

        return (
            <div className={"flex flex-col justify-center w-16 h-16 " + color}>
                <span className="text-center">{this.state.value}</span>
            </div>
        );
    }
}

export default Cell;