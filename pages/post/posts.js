import Link from 'next/link'
import Navbar from '../navbar';

export async function getServerSideProps(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data= await response.json();
    return{
        props:{
            data
        }
    }    
}


function posts({data}) {
  return (
    <div>
        <Navbar/>
        {data.slice(0,5).map((el)=>
        <div key={el.id} style={{display:'flex' , gap:'2rem'}}>
            <h4>{el.id}</h4>
            <Link href={`/post/${el.id}`}>
            <h4>{el.title}</h4>
            </Link>
            
        </div>
        )}
    </div>
  )
}

export default posts