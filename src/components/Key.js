import React from 'react';

class Key extends React.Component {

    sendKey(self) {
        if (!self.props.disabled) {
            self.props.boardRef.current.updateCellValue(self.props.value);
        }
    }

    render() {
        var color;
        switch (this.props.state) {
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
                color = "bg-lightgrey";
                break;
        };

        var width = "w-10";
        if (this.props.value === "Enter" || this.props.value === "⌫") {
            width = "w-14"
        }

        return (
            <button onClick={() => {this.sendKey(this)}} className={"h-12 flex flex-col justify-center shadow-lg rounded " + color + " " + width}>
                <span className="text-center">{this.props.value}</span>
            </button>
        );
    }
}

export default Key;