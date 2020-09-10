import React,{Component} from 'react';
import Todo from './todo';
import { getTodos, saveTodo } from '../../services/todos-services';

class TodosContainer extends Component{

    state = {
        showTodo:'false',
        todos:[],
        todo:''
    };

    onChangeTodo = (e) =>{
        this.setState({
            todo:e.target.value
        });
      }
    
    onNewTodo = async() =>{
        saveTodo(this.state.todo);
        let todos = await getTodos();
        this.setState({
            todos:todos
        });
    };

    async componentDidMount (){
        let todos = await getTodos();
        this.setState({
            todos:todos
        });
    }

    render(){

        let todos = this.state.todos;
        let todosViews = todos.map((todo,i) =>{
            return <Todo key={i} todo={todo}/>
        });
        
        return <div className='todos'>
            <h1>Lista TODO's</h1>
            {todosViews}
            <input type='text' value={this.state.todo} onChange={this.onChangeTodo}/>
            <button onClick={this.onNewTodo}>Guardar</button>
        </div>
    }
};

export default TodosContainer;

