import {createMemo, createSignal} from "solid-js";

export const FibonacciCounter = () => {
    const fibonacci = (num: number): number => {
        if (num <= 1) return 1;

        return fibonacci(num - 1) + fibonacci(num - 2);
    }

    const [count, setCount] = createSignal(10);
    const fib = createMemo(() => {
        console.log('Calculating fibonacci..')
        return fibonacci(count())
    });

    return <div>
        <h1>Fibonacci counter</h1>
        <button onClick={() => setCount(count() + 1)}>Count: {count()}</button>
        <ul>
            <li>{fib()}</li>
            <li>{fib()}</li>
            <li>{fib()}</li>
        </ul>
    </div>
}