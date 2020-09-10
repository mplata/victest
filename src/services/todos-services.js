import firebaseApp from '../firebase';

export async function getTodos(){

    let db = firebaseApp.firestore();
    let todosResponse = await db.collection('todos').get();
    let todos = [];
    todosResponse.forEach(doc =>{
        let todo = {...doc.data()};
        todos.push(todo);
    });
    return todos;
}

export function saveTodo(todo){

    let db = firebaseApp.firestore();
    db.collection('todos').add({
        description:todo
    });
}
