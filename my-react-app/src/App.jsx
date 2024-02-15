import React, { useState } from 'react'

const App = () => {
  const [count ,setCount] = useState(0)
  return (
    <div class='boxx flex'>
      <div className="box flex">
      <div>
        <h1 >1</h1>
        <h2 >choose title</h2>
      </div>
      <div>
        <h1>2</h1>
        <h2>choose description</h2>
      </div>
      <div>
        <h1>3</h1>
        <h2 className='data__btn'>confirm data</h2>
      </div>
      <div>
        <h2>content :{count}</h2>
        <div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
          <button className={'block border py-2 text-wihte bg-lime-500'}
          onClick={()=>{
            setCount(count - 1)
          }}
          >back</button>
          <button className={'block border py-2 text-wihte bg-lime-500'}
          onClick={()=>{
            setCount(count + 1)
          }}
          >submit description</button>
        </div>
      </div>
      </div>
    </div>
  )
}
export default App