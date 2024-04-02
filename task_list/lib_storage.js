/*
To create a store, pass your root reducer function to Redux Toolkit's configureStore method, which will set up a Redux store with a good default configuration. 

*/


import {createStore } from 'redux'
const store = createStore(todos, ['Clean my room.'])
const addTodo = (text) => {
	return {
	type: 'ADD_TODO',
	text
    }
}; export default addTodo;

// PARENT COMPONENT:	
store.dispatch(addTodo('Understand Redux'))

const storage = {
    retrieve() { 
        const tasks = [];
        const json = localStorage.E17tasks;
        if(json) {
            const taskArray = JSON.parse(json);
            for(let obj of taskArray) {
                tasks.push(new Task(obj)); // uses destructuring
            }
        }
        return tasks;
    },
    store(tasks) { 
        localStorage.E17tasks = JSON.stringify(tasks); 
    },
    clear() { 
        localStorage.E17tasks = ""; 
    }
};