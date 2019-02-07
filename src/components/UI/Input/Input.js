import React from 'react';
import styles from './Input.scss';

const input = (props) => {
    let inputElement = null;
    const inputStyles = [styles.Input__element];

    if(props.invalid && props.shouldValidate && props.touched) {
        inputStyles.push(styles.Input__invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                    className={inputStyles.join(' ')} 
                    {...props.elementConfig} 
                    value={props.value} 
                    onChange={props.changed}/>;
        break;
        case ('textarea'):
            inputElement = <textarea 
                    className={inputStyles.join(' ')} 
                    {...props.elementConfig} 
                    value={props.value} 
                    onChange={props.changed}/>;
        break;
        default:
            inputElement = <input 
                    className={inputStyles.join(' ')}
                    {...props.elementConfig} 
                    value={props.value} 
                    onChange={props.changed}/>;
    }

    return (
        <div className="input">
            <label className="input__label">{props.label}</label>
            {inputElement}
        </div>
    )
};

export default input;