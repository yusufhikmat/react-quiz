import React from 'react'

const PricePyramid = ({datas,questionNumber}) => {
  return (
    <div className='PricePyramid'>
     <ul className='priceLists'>
    {datas.map((data)=>{
        return   <li key={data.id} className={questionNumber === data.id ? 'priceListItem active' : "priceListItem"}>
                    <span className='priceListNumber'>{data.id}</span>
                    <span className='priceListAmount'> $ {data.amount}</span>
                </li>
    })}
               
            </ul>
        </div>
  )
}

export default PricePyramid