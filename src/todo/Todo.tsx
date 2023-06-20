import {createEffect, createSignal, For} from "solid-js";

interface Todo {
    id: number;
    text: string;
}

let input: HTMLInputElement;

export const Todo = () => {
    const [todos, setTodos] = createSignal<Todo[]>([]);
    let todoId = 0;

    const addTodo = (text: string) => {
        setTodos([...todos(), {id: ++todoId, text}]);
    }

    createEffect(() => {
        console.log(`${todos().length} tasks`)
    })
    return <>
        <h1>Basic Todo</h1>
        <div>
            <input type="text" ref={input}/>
            <button onClick={() => {
                if (!input.value.trim()) return;
                addTodo(input.value);
                input.value = "";
            }}>Add Todo
            </button>
        </div>
        <div>
            <ul>
                <For each={todos()}>
                    {(todo) => <li>{todo.text}</li>}
                </For>
            </ul>
        </div>
    </>
}