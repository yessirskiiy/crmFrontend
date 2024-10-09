import {ReactNode} from "react";
// @ts-ignore
import styles from './Button.module.scss'


interface ButtonProps {
    children?: ReactNode;
    style?: {};
}


const Button = ({children}: ButtonProps) => {
    return (
        <button className={styles.button}>
            {children}
        </button>
    );
};

export default Button;