import {ReactNode} from "react";
// @ts-ignore
import styles from './Button.module.scss'


interface ButtonProps {
    children?: ReactNode;
    style?: {};
}


const Button = ({...props}) => {
    return (
        <button className={styles.button} {...props}>
            {props.children}
        </button>
    );
};

export default Button;