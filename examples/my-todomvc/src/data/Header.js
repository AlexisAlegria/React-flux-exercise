import React from 'react'
// import NewComponent from './NewComponent';

const Header = (props) => {
  return (
    <header id="header">
      <h1>{props.text}</h1>
      {/* <NewComponent text={'Hello from NewComponent'}/> */}
      <br />
      <input
        className="newTodoInput"
        type="text"
        placeholder="Enter a new todo, please!"       
        onSubmit={() => props.onAddTodo(todo.id)}/>
    </header>
  );
}
export default Header
