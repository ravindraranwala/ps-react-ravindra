import React from 'react';
import RegistrationForm from 'ps-react/RegistrationForm';

export default class ExampleRegistrationForm extends React.Component {
    onsubmit = (user) => {
        console.log(user);
    }

    render() {
        return <RegistrationForm onSubmit={this.onsubmit} />
    }
}