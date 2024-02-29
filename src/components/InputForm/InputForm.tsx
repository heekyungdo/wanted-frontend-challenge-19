import React from 'react'
import { useSelector } from 'react-redux'

const InputForm = () => {
    useSelector();
    const handleInput = () => {

    }

    return (
        <div>
            <form onSubmit={handleInput}>
                <label htmlFor="todo"></label>
                <input type="text" id='todo' />
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default InputForm