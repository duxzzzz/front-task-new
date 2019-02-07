import React, { Component } from 'react';
import styles from './Form.scss';
import axios from '../../axios';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

class Form extends Component {
    state = {
        contactForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your message'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 100
                },
                valid: false,
                touched: false
            }
        },
        loading: false,
        success: null,
        error: []
    }

    contactHandler = (event) => {
        event.preventDefault();
        this.setState({ loading:true });
        this.setState({ success: null });
        this.setState({ error: [] });
        const data= {};
        for (let formElementIdentifier in this.state.contactForm) {
            data[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value;
        }

        axios.post('contact', data)
        .then(response => {
            this.setState({ loading: false });
            this.setState({ success: response.data.message});
            this.setState({
                contactForm: {
                    email: {
                        value: ''
                    },
                    message: {
                        value:''
                    }
                }
            });
        })
        .catch(error => {
            this.setState({ loading: false });
            this.setState({error: error.response.data.errors})
        });
    }

    checkValidity(value, rules) {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedContactForm = {
            ...this.state.contactForm
        }

        const updatedFormElement = {
            ...updatedContactForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedContactForm[inputIdentifier] = updatedFormElement;
        this.setState({ contactForm: updatedContactForm });
    }

    render () {
        let formElementsArray = [];
        for (let key in this.state.contactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            })
        }

        const errors = this.state.error.map(er => {
            return <span
                        style={{
                                display: 'block',
                                margin: '0 8px',
                                padding: '5px',
                                color: 'red'
                              }} 
                        key={er}>{er}
                    </span>;
            })
        
        const success = (
            <span 
                style={{
                    display: 'block',
                    margin: '0 8px',
                    padding: '5px',
                    color: 'green'
                }}
            >
                {this.state.success}
            </span>
        )

        let form = (
            <form onSubmit={this.contactHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                {errors}
                {success}
                <Button>SUBMIT</Button>
            </form>
        )

        if (this.state.loading) {
            form = <Spinner/>;
        }

        return(
            <div className={styles.Form}>
                <h4 className={styles.Form__title}>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default Form;