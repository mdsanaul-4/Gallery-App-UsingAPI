import React, { useEffect, useState } from 'react'
import axios from 'axios'



const App = () => {
const [data, setData] = useState([]);
const [pages, setPage] = useState(1);

const getdata = async () => {

  const response = await axios.get(`https://picsum.photos/v2/list?page=${pages}&limit=10`)
  setData(response.data);
}

let printdata = <h3 className=' justify-center items-center font-bold font-5xl'> LOADING....</h3>

if (data.length > 0) {
  printdata = data.map((elem) => {
    return <div key={elem.id} >
      <a href={elem.url}>
        <div className='bg-gray-800 rounded-2xl overflow-hidden shadow-lg'>
          <img src={elem.download_url}className='w-full h-40 object-cover' alt="" />
          <h2 className='text-center p-3 font-semibold'>{elem.author}</h2></div>
      </a>
    </div>
  })}


useEffect(() => {
  getdata();
}, [pages]);

  return (
      <div className='min-h-screen w-full bg-gray-700 text-white p-5'>
         
      
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 '>
        {printdata}
       </div>

        <div className='flex justify-center items-center gap-5 mt-10'>
        <button onClick={() =>{
          if(pages>1){
            setPage([])
            setPage(pages-1)
          }
        }}
         
        className='bg-yellow-300 px-4 py-3 rounded-full text-black text-bold text-xl'>Prev</button>

        <h1 className= 'px-4 py-3  text-white text-bold text-xl' >{pages}</h1>
        <button onClick={() =>{
          setPage([])
          setPage(pages+1)
        }} className='bg-yellow-300 px-4 py-3 rounded-full text-black text-bold text-xl '>Next</button>
        </div>
  
      </div>
  )
}

export default App




