import React from 'react'

function Todo({todo,}) {
  
    return (
        <div className="todo">
           <h2 className="txt">{todo.text}</h2> 
           <br></br>
           <h4>{todo.text}</h4>
           </div>
           )
}
export default Todo