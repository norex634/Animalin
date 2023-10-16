import React from 'react'
import { DataTable } from '@/components/elements/table/DataTableCategorieActu'
import { columnsCategorieActu } from '@/components/elements/table/Columns'
import { GetFetchCategorieActu } from '@/components/fetch/CategorieActu'

const page = async () => {
  const cat = await GetFetchCategorieActu()
  return (
    <div className='w-full h-full bg-slate-100 p-4 flex-col justify-center'>
      <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>Tous les categorie</h1>
      <div className=" flex w-full h-[50%] ">
      <DataTable columns={columnsCategorieActu} data={cat}  />

      
      </div>

    </div>
  )
}

export default page