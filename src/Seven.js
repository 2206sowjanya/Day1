import React from "react";

class Seven extends React.Component {
    count = 0;

    constructor() {
        super();
        this.state = {
            number: 0
        };
        console.log("Constructor is calling me");
    }

    componentDidMount() {
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count + 1);
        console.log(this.state.number + 1);
    }

    componentWillUnmount() {
        console.log("Unmount");
    }

    componentDidUpdate() {
        console.log("component update");
    }

    buttonClick = () => {
        console.log("Button clicked");
        console.log(this.count + 1);
        this.setState({ number: this.state.number + 1 });
    };

    buttonChange = () => {
        console.log("Button not clicked");
    };

    render() {
        return (
            <div>
                <h1>Hello world {this.count}</h1>
                <button className="btn btn-primary" onClick={this.buttonClick}>Submit</button>
            </div>
        );
    }
}

export default Seven;
