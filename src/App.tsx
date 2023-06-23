import type {Component} from 'solid-js';
import styles from './App.module.css';
import {Todo} from "./todo/Todo";

const App: Component = () => {


    return (
        <div class={styles.container}>
            <Todo></Todo>
            {/*<FibonacciCounter></FibonacciCounter>*/}
        </div>

    );
};

export default App;
