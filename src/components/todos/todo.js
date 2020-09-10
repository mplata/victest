import React,{useState} from 'react';

const Todo = (props) =>{
    
    let todo = props.todo;

    const [count, setCount] = useState(0);

    const onClick = () =>{
        setCount(count+1);
    };

    return <div>
        {todo.description} <input type='checkbox' checked={todo.done} disabled/> <button onClick={onClick}>{count}</button>
    </div>
};

export default Todo;