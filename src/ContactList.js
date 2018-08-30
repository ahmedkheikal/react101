import React from 'react';
import { PropTypes } from 'prop-types';
import ContactRow from './ContactRow';
import AddContactForm from './AddContactForm';

var contactsSample = [
    {
        id: 1221,
        name: 'Ahmed',
        phone: '01025248181',
        profilePicture: 'http://'
    },
    {
        id: 1221,
        name: 'Mohamed',
        phone: '01035348181',
        profilePicture: 'http://'
    },
    {
        id: 1221,
        name: 'Mahmoud',
        phone: '01025244323',
        profilePicture: 'http://'
    },
    {
        id: 1221,
        name: 'Ahmed',
        phone: '01098432381',
        profilePicture: 'http://'
    },
];

export default class ContactList extends React.Component {

    constructor(props) {
        super(props);
        this.addContact = this.addContact.bind(this);
        this.state = {
            // contacts: contactsSample,
            contacts: [],
            loading: false
        };
    }

    addContact(newContact) {
        this.setState({
            contacts: [
                ...this.state.contacts,
                newContact
            ]
        });
    }

    // fires before render()
    componentWillMount() {
    }
    render() {
        var ContactsView = this.state.contacts.map( (contact, i) =>
            <ContactRow key={i}
                        id={contact.id}
                        name={contact.name}
                        phone={contact.phone}
                        profilePicture={contact.profilePicture} />
        );
        return (
            <div>
                {this.state.loading ?
                    <span>loading ... </span> :
                    this.state.contacts.length ? <span>{this.state.contacts.length}</span> :
                     <span>No Contacts Found</span>
                }
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ContactsView}
                    </tbody>
                </table>
                <AddContactForm newContact={this.addContact} />
            </div>
        );
    }

    // fires after render()
    componentDidMount() {
        this.setState({
            loading: true
        });
        fetch("https://api.randomuser.me/?results=112")
            .then((response) => response.json())
            .then((response) => {
                var refinedContactList = response.results.map((contact) => {
                    return {
                        id: Math.floor(Math.random() * 20),
                        name: contact.name.first + ' ' + contact.name.last,
                        phone: contact.phone,
                        email: contact.email,
                        address: contact.location.street,
                        profilePicture: contact.picture.medium
                    };
                })
                this.setState({
                    contacts: refinedContactList,
                    loading: false
                });
            });
    }

}

ContactList.propTypes = {
    contacts: PropTypes.array
};
