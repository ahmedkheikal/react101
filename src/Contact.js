import React from 'react';
import './stylesheets/contact.scss';

/**
 *
 * @param profilePicture
 * @param name
 * @param phone
 * @param email
 * @param address
 *
 */

export default class Contact extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="contact">
                <img src={this.props.profilePicture} alt={this.props.name} />
                <h2>{this.props.name}</h2>
                <p>{this.props.phone}</p>
                <p>{this.props.email}</p>
                <p>{this.props.address}</p>
            </div>
        );
    }
}

Contact.defaultProps = {
    name: 'Ahmed',
    phone: '010',
    email: 'user@example.com',
    address: 'addr',
    profilePicture: 'http://'
};
