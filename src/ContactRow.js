import React from 'react';

export default class ContactRow extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <tr>
                <td>
                    { this.props.id }
                </td>
                <td>{ this.props.name }</td>
                <td>{ this.props.phone }</td>
                <td>
                    <img src={ this.props.profilePicture }  alt={ this.props.name + "'s Image'" }/>
                </td>
                <td>
                    <a href="#">
                        <button className="btn btn-primary">View</button>
                    </a>
                </td>
            </tr>
        );
    }
}
