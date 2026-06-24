import { useEffect, useState } from 'react'
import { fetchPosts,fetchDetail } from './PostData/GetData'

function App() {
  useEffect(async ()=>{
    console.log(await fetchPosts());
  },[]);
  
  return (
    <>
    </>
  )
}

export default App
