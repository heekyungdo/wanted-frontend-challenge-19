import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../../store/todo'

const InputForm = () => {
    const [text,setText] = useState('')
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addTodo({
            id:Date.now(),
            todo:text
        }));
        setText('');
    };

    const inputHandler = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="todo"></label>
                <input 
                type="text" 
                placeholder='할일을 입력해주세요.'
                id='todo' 
                value={text}
                onChange={inputHandler}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default InputForm


