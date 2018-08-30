import React from 'react';
import ReactDOM from 'react-dom';
import {
    hello as Hello,
    goodbye as Goodbye
} from './lib';
import Contact from './Contact';
import ContactList from './ContactList';

export default class App extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <div>
            <Contact
                profilePicture="https://7puzn1bawno25nd4f1awju71-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/alex__2.gif"
                name="John Doe"
                phone="021458965"
                email="john-doe@example.com"
                address="10 California St."
                />

                <ContactList />
            </div>
        );
    }
}
