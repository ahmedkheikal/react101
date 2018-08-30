import React from 'react';
import { CountryNames } from './CountryNames';

export default class AddContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(e) {
        e.preventDefault();
        console.log(this.props);
        this.props.newContact({
            id: this.refs.id.value,
            name: this.refs.name.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value,
            // address: this.refs.address.value,
            profilePicture: this.refs.profilePicture.value,
        });
    }
    render() {
        return (
            <form onSubmit={this.submit} className="add-contact-form">

                <div>
                    <label htmlFor="id">test autoComplee</label>
                    <input id="id" list="countries" />
                    <datalist id="countries">
                        {CountryNames.map((name, i) => {
                            return <option key={ i } value={ name }>{ name }</option>;
                        })}
                    </datalist>
                </div>
                <div>
                    <label htmlFor="id">id</label>
                    <input id="id" placeholder="id" ref="id" type="text" defaultValue="645312" required />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" placeholder="name" ref="name" type="text" defaultValue="Ahmed" required />
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" placeholder="phone" ref="phone" type="text" defaultValue="01025486585" required/>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" placeholder="email" ref="email" type="text" defaultValue="user@example.com" required/>
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input id="adddress" placeholder="adddress" ref="address" type="text" defaultValue="10 example st." required/>
                </div>

                <div>
                    <label htmlFor="profilePicture">Profile Picture</label>
                    <input id="profilePicture" placeholder="profilePicture" ref="profilePicture" type="text" defaultValue="http://" required/>
                </div>
                <div>
                    <input type="submit" value="Add" />
                </div>
            </form>
        );
    }
}
