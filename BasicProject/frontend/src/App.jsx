import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get('/api/books')
    .then((response) => {
      setBooks(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
      <h1>Full Stack Projects</h1>
      <p>Books: {books.length}</p>

      {
        books.map((book,index)=>(
            <div key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
        ))
      }
    </>
  )
}

export default App
