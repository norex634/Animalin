import React from 'react'
import { DataTable } from '@/components/elements/table/DataTableCategorieAnimal'
import { columnsCategorieAnimal } from '@/components/elements/table/Columns'
import { GetFetchCategorieAnimal } from '@/components/fetch/CategorieAnimal'

const page = async ({}) => {
  const categorie = await GetFetchCategorieAnimal()
  const pageval= 3
  return (
    <div className='w-full bg-slate-100 p-4'>
      <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>categorie</h1>
      
    {/* <DataTable columns={columnsCategorieAnimal} data={categorie} totalPage={totalPageCategorie} value={`categorie`} /> */}
    <DataTable columns={columnsCategorieAnimal} data={categorie} pageval={pageval} />
    </div>
  )
}

export default page