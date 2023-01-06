import { useState } from "react";
import Navbar from "../navbar";

export async function getServerSideProps(){
    const response = await fetch(`http://localhost:5000/todos`);
    const data= await response.json();
    return{
        props:{
            data
        }
    }    
}

function Todos({data}){
    const [todo, setTodo] = useState("");

    const addTodo=()=>{
        fetch("http://localhost:5000/todos",{
        method:"POST",
        headers:{
        "content-type":"application/json"
        },
        body: JSON.stringify({
        "name":todo
        })
    })
    .then((res)=>{
        res.json()
    })
    .then((data)=>{
        console.log("new todo added")
    })
    .catch((err)=>{
        console.log(err)
    })
    }
    
    const handleDelete=(id)=>{
        fetch(`http://localhost:5000/todos/${id}`,{
            method:"DELETE",
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div style={{textAlign:'center'}}>
            <Navbar/>
            <h1>Todos</h1>
            <input type='text'
            placeholder="Enter new todo"
            onChange={(e)=>setTodo(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>

        <div>
            {data.length? data.map((el)=>
            <div key={el.id} style={{display:"flex" , gap:'2rem' , marginTop:'2rem', justifyContent:'center'}}>
            <h3>{el.id}</h3>
            <h3>{el.name}</h3>
            <button onClick={()=>handleDelete(el.id)}
            style={{width:'100px',height:'30px', backgroundColor:'blue',color:'white',marginTop:'16px'}}
            >Delete</button>
            </div>
            ): <h3>No todo present</h3>}
        </div>
        </div>
    )
}

export default Todos;