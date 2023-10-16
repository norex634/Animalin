import { Fragment } from 'react'


export default function CardA() {
  


  return (
<>
<div className="card w-96 bg-base-100 shadow-xl mt-6">
    <figure><img src="https://placedog.net/400/250" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
        Shoes!
        <div className="badge bg-[#25CAAC] border-[#25CAAC]">NEW</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div>
        <div className="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
</>
  )
}





