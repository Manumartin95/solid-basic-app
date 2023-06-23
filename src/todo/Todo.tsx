import {createEffect, createMemo, createSignal, For, Show} from "solid-js";
import styles from './todo.module.css'

interface Todo {
    id: number;
    text: string;
    finished: boolean
}

let input: HTMLInputElement;

export const Todo = () => {
    const [todos, setTodos] = createSignal<Todo[]>([{id: 0, text: 'Finished Task', finished: true}]);
    const [showUnfinished, setShowUnfinished] = createSignal<boolean>(false);
    let todoId = 1;

    const addTodo = (text: string) => {
        setTodos([...todos(), {id: ++todoId, text, finished: false}]);
    }

    createEffect(() => {
        console.log(`${todos().length} tasks`)
    })

    const filterUnfinished = createMemo(() => {
        console.log('showing unfinished tasks...')
        return todos().filter(x => !x.finished)
    })


    return <>
        <h1>Basic Todo</h1>
        <div class={styles.container}>
            <button onClick={() => setShowUnfinished(!showUnfinished())}>
                <Show when={showUnfinished()} fallback={<>Show Unfinished Tasks</>}>
                    Show all Tasks
                </Show>
            </button>
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
                <Show when={showUnfinished()} fallback={<>
                    <ul>
                        <For each={todos()}>
                            {(todo) => <li>{todo.text}</li>}
                        </For>
                    </ul>
                </>}>
                    <ul>
                        <For each={filterUnfinished()}>
                            {(todo) => <li>{todo.text}</li>}
                        </For>
                    </ul>
                </Show>

            </div>
        </div>
    </>
}