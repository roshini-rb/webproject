import React, { useState } from 'react'

const Body = () => {
  const[count,setCount] = useState(0)
  function increment(){
    setCount(count+1);
  }
  const[count1,setCount1] = useState(0)
  function increment1(){
    setCount1(count1+1);
  }
  const[count2,setCount2] = useState(0)
  function increment2(){
    setCount2(count2+1);
  }
  return (
    <div>
      <p style={{textAlign:'center'}}>Voice is such a powerful tool of expression, and we people love to use it. For today’s article, I prepared a collection of beautiful singing quotes to inspire you to let your voice out and sing.</p>
      <div style={{display:'inline-flex',marginLeft:'30%'}}>
      <p>
        Likes:{count}
        <button onClick={increment}>💖</button>
      </p>
      <p>
        Comment:{count1}
        <button onClick={increment1}>comment✉</button>
      </p>
      <p>
        Share:{count2}
        <button onClick={increment2}>Share</button>
      </p>
      </div>
      
      
    </div>
  )
}
export default Body