import React from 'react';
import ReactDOM from 'react-dom';

// export default const Whoops404 = () =>

export default class Whoops404 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.location.pathname !== "/")
        return (
            <h1>
                Whooops, page not found
            </h1>
        );
        else
        return "";
    }
}
