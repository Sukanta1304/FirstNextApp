import Link from 'next/link'

function Navbar() {
  return (
    <div style={{display:'flex', gap:'2rem',justifyContent:'center'}}>
      <Link href="/"><h3>Home</h3></Link>
      <Link href="/about"><h3>About Us</h3></Link>
      <Link href="/blog"><h3>Blog Post</h3></Link>
      <Link href="/image"><h3>Image</h3></Link>
      <Link href="/todo/todos"><h3>Todo</h3></Link>
      <Link href="/post/posts"><h3>Post</h3></Link>
    </div>
  )
}

export default Navbar