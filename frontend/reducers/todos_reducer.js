import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

//May need to add case undefined for clear action;
const todosReducer = (state = initialState, action) => {
  let newstate = {};
  switch (action.type) {
    case RECEIVE_TODOS:
    for (let i = 0; i < action.todos.length; i++) {
      let newstateId = action.todos[i].id;
      newstate[newstateId] = action.todos[i];
    }
      return newstate;
    case RECEIVE_TODO:
    newstate = action.todo;
    let key = action.todo.id;
    let newObj = {};
    newObj[key] = newstate;
    return Object.assign(state, newObj);
    default:
      return state;
  }
};

export default todosReducer;
