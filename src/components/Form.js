import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Helmet} from "react-helmet";

const Form = ({ input, setInput, todos, setTodos, edittodo, setEdittodo }) => {

    const updateTodo = (title, id, completed) => {
        const newtodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newtodo);
        setEdittodo("");
    };
    useEffect(() => {
        if (edittodo) {
            setInput(edittodo.title);
        } else {
            setInput("");
        }
    }, [setInput, edittodo]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!edittodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        } else {
            updateTodo(input, edittodo.id, edittodo.completed)
        }

    }
    return (
        
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Plese Enter a Todo...."
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
            />
            <button className="button-add" type="submit">{edittodo ? "OK" : "ADD"}</button>
            <Helmet>
                <div class="share_fm_dl_sm" id="attachment_poi"></div>
                <script type="text/javascript" src="https://services.digitallocker.gov.in/requester/api/2/dl.js" id="dlshare"
                    data-app-id="866FD557" data-app-hash="getHash()" time-stamp="getTimestamps()" data-callback="getData(res)">
                </script>
            </Helmet>
        </form >
    )
}

export default Form
