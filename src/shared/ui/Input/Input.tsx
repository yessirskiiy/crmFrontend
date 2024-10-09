import React, {forwardRef} from 'react'

// @ts-ignore
import styles from './Input.module.scss'


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}


const Input = forwardRef<HTMLInputElement, InputProps>(({...props}, ref) => {
    return (
        <input className={styles.input} ref={ref} {...props} />
    );
});

export default Input;