
import React from 'react'
import { DataTable } from '@/components/elements/table/DataTableAnimal'
import { columnsAnimal } from '@/components/elements/table/Columns'
import { GetFetchAnimal } from '@/components/fetch/Animal'
import {GetFetchRace} from '@/components/fetch/Race'
import {GetFetchCategorieAnimal} from '@/components/fetch/CategorieAnimal'
import {GetFetchSexe} from '@/components/fetch/Sexe'




const page = async () => {
  const animal = await GetFetchAnimal()
  const pageval = 10
  const race = await GetFetchRace()
  const sexe = await GetFetchSexe()
  const categorie = await GetFetchCategorieAnimal()
  
  return (
    <div className='w-full h-full bg-slate-100 p-4 flex-col justify-center'>
      <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>Tous les animaux</h1>
      <div className=" flex w-full  ">
      {/* <DataTable columns={columnsAnimal} data={animal} totalPage={totalPageAnimal} value={`animal`} /> */}
      <DataTable columns={columnsAnimal} data={animal} pageval={pageval} race={race} sexe={sexe} categorie={categorie}/>

      
      </div>

    </div>
  )
}

export default page