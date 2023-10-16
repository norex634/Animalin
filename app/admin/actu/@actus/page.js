import React from 'react'
import { DataTable } from '@/components/elements/table/DataTableActu'
import { columnsActu } from '@/components/elements/table/Columns'
import { GetFetchActu } from '@/components/fetch/Actu'
import { GetFetchCategorieActu } from '@/components/fetch/CategorieActu'

const page = async () => {
  const actu = await GetFetchActu()
  const pageval = 9
  const categorieActu = await GetFetchCategorieActu()
  return (
    <>
    
    <div className='w-full h-full bg-slate-100 p-4 flex-col justify-center'>
      <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>Tous les actus</h1>
      <div className=" flex w-full h-[50%] ">
      <DataTable columns={columnsActu} data={actu} pageval={pageval} categorieactu={categorieActu}/>

      
      </div>

    </div>
    </>
    
  )
}

export default page