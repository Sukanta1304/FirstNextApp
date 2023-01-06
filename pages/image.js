import Image from 'next/image';
import Navbar from './navbar';
function image() {
  return (
    <div>
        <Navbar/>
        <div style={{textAlign:'center'}}>
        <Image 
         src="/tryimage.jpg"
         height={200} 
         width={200} 
         alt="Local Image"
        />
        <br/>
        <Image 
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi4BO7avgS-4RN5sH8i0Vu1kzoMKZsRpOA3y0DEGjc&s"
         height={200} 
         width={200} 
         alt="URL Image"
        />
        </div>
    </div>
  )
}

export default image