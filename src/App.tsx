import type {Component} from 'solid-js';
import styles from './App.module.css';
import {FibonacciCounter} from "./fibonacci/FibonacciCounter";

const App: Component = () => {


    return (
        <div class={styles.container}>
            {/*<Todo></Todo>*/}
            <FibonacciCounter></FibonacciCounter>
        </div>

    );
};

export default App;
