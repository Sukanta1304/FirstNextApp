import React from 'react'
import Navbar from '../navbar';

export const getStaticPaths=async()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data= await response.json();
    const paths= data.map((el)=>{
        return{
            params:{id: el.id.toString()}
        }
    })
    return{
        paths,
        fallback: false,
    }
};


export async function getStaticProps(context){
    const id= context.params.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data= await response.json();
    return{
        props:{
            data
        }
    }    
}
function SinglePage({data}) {
  return (
    <div style={{textAlign:'center'}}>
        <Navbar/>
        <div key={data.id} style={{display:'flex',flexDirection:'column',}}>
            <h4> ID: {data.id}</h4>
            <h4>Title : {data.title}</h4>
            <h4> Descripion: {data.body}</h4>      
        </div>
    </div>
  )
}

export default SinglePage