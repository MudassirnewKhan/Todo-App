import React,{useState} from "react";
import './todo.css'



const Todolist=()=>{

    const [todos,setTodos]=useState([]);
    const [hinp,setHinp]=useState('');
    const [linp,setLinp]=useState({});


    const handleaddtodo=()=>{
        if(hinp.trim()!=='')
            setTodos([...todos,{heading:hinp,lists:[]}])
        setHinp('');

    }

    const handleaddlist=(index)=>{
        if((linp[index] &&linp[index].trim())!==''){
            const newtodos=[...todos];
            newtodos[index].lists.push(linp[index]);
            setTodos(newtodos);
            setLinp({...linp,[index]:''});
        }

    }
    const handlelistic=(index,value)=>{
                    setLinp({...linp,[index]:value});



    }

    const deletetodo=(index)=>{
        const newtodos=[...todos];
        newtodos.splice(index,1);
        setTodos(newtodos);
    }
const deletelistitem = (todoIndex, listIndex) => {
    const newTodos = [...todos];
    newTodos[todoIndex].lists.splice(listIndex, 1);
    setTodos(newTodos);
};




    return(
        <>
          
          <div className="todocont">
            <h1>My Todo List</h1>
            <div className="inputcont">
                <input type="text" className="headinginpt" placeholder="Enter your heading"
                value={hinp} onChange={(e)=>{setHinp(e.target.value)}}></input>
                <button className="addlistbtn" onClick={handleaddtodo}>Add Heading</button>
            </div>
          </div>
          <div className="todomain">
            {todos.map((todo,index)=>{
                return(
                     <div key={index} className="todocard">
                    <div className="headingtodo">
                        <h3>{todo.heading}</h3>
                        <button className="deletebtnh" onClick={()=>deletetodo(index)}> Delete Heading</button>
                    </div>
                    <div className="addlist">
                        <input type="text" className="listinp"  placeholder="Add list"
                        value={linp[index] || ''} onChange={(e)=>handlelistic(index,e.target.value)}></input>
                        <button className="addlistinptbtn" onClick={()=>handleaddlist(index)}>Add items</button>
                    </div>
                    <ul>
                        {todo.lists.map((list,listindex)=>(
                            <li key={listindex } className="todoil">
                                <p>{list}</p>
                        <button className="deletelistbtn" onClick={() => deletelistitem(index, listindex)}>❌</button>

                            </li>
                            
             ) )}
                    </ul>
                </div>
                )
               
            })}
            
          </div>


        </>
    )
}

export default Todolist;