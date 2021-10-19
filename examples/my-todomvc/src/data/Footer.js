import React from 'react'

const Footer = (props) => {
    if (props.todos.size === 0) {
      return null;
    } 
    const remaining = props.todos.filter(todo => !todo.complete).size;
    const phrase = remaining === 1 ? ' item left' : ' items left';
    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>
            {remaining}
          </strong>
          {phrase}
        </span>
      </footer>
    );
}
export default Footer