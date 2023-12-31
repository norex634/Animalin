import React from 'react'
import { fetchCompagnie } from '@/components/fetch/Compagnie';


const compagnies = await fetchCompagnie();
const page = () => {
  return (
    
    <div className='w-full h-[50%] bg-slate-600 p-4'>
      <h1>Nom de la compagnie : {compagnies.nom}</h1>
      <h1>Horaire : </h1>
      {compagnies.horaire.map((horaire)=> (
        <div key={horaire.id}>
          <p><span>jour : {horaire.jour}</span></p>
          <p><span>Heure de début : {horaire.h1.split('T')[1].slice(0, 5)}</span></p>
          <p><span>Heure de fin : {horaire.h2.split('T')[1].slice(0, 5)}</span></p>
        </div>
      ))}
      
    </div>
  )
}

export default page