import React from 'react'
import { DataTable } from '@/components/elements/table/DataTableFaq'
import { columnsFaq } from '@/components/elements/table/Columns'
import { GetFetchFaq } from '@/components/fetch/Faq'


const page = async () => {
  const faq = await GetFetchFaq()
  const pageval = 10
  return (
    <>
    <div className='w-full h-screen bg-slate-100 p-4 flex-col justify-center'>
      <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>Tous les actus</h1>
      <div className=" flex w-full h-[50%] ">
      <DataTable columns={columnsFaq} data={faq} pageval={pageval} />

      
      </div>

    </div>
    </>
  )
}

export default page