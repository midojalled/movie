import React , {useState} from 'react'


function Edit({addTodo}) {

    const[value,setValue]=useState("");
   
    const handlechange=event=>{
      
     setValue(event.target.value)
   };
   const handleClick=e=>{
    e.preventDefault();
    if(value.trim()) {
        addTodo(value);
        setValue("")
    }
};

  return (
    <div class="container">
         
          <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add a Movie</button>
          
          <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add a movie</h4>
      
        </div>
        

       <div> Name : <input type="text"    onChange={handlechange}></input>  </div>
       
       <div> Initial release : <input type="text" onChange={handlechange} ></input></div>
        <button className="buut"  class="btn btn-default" data-dismiss="modal" onClick={handleClick}>ADD</button>
        
  </div>
      </div>
      </div>
      </div>
    
      
  )
}
export default Edit 
