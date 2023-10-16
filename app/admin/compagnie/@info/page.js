import React from 'react'
import { fetchCompagnie } from '@/components/fetch/Compagnie'
// import { DataTable } from '@/components/elements/table/DataTable'
// import { columns } from '@/components/elements/table/Columns'










const page = async () => {
  
  const compagnies = await fetchCompagnie();
  
  
  return (
    <div className='w-full bg-slate-100 p-4'>

  


      <h1>Compagnie : </h1>
      <p><span>nom : {compagnies.nom}</span></p>
      <p><span>logo : <img src={compagnies.logo} alt="" /></span></p>
      <p><span>slogan : {compagnies.slogan}</span></p>
      <p><span>tel : {compagnies.tel}</span></p>
      <p><span>lieu : {compagnies.lieu}</span></p>
      <p><span>email : {compagnies.email}</span></p>
      
      </div>
  )
}

export default page