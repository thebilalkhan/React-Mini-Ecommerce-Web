import React from 'react'

export default function Catagory({catagories,setCatProducts}) {

  let myCat = catagories.map((product, index) => {
    return (
      <div onClick={()=>setCatProducts(product)} key = {index} className='catagories'>{product}</div>
    )
  })

  return (
    <>
     {myCat}
    </>
  )
}
