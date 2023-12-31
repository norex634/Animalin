import { columnsRace } from '@/components/elements/table/Columns'
import { DataTable } from '@/components/elements/table/DataTableRace'
import { GetFetchRace } from '@/components/fetch/Race'
import React from 'react'

const page = async () => {
  const race = await GetFetchRace()
  const pageval = 3
  return (
    <div className='w-full bg-slate-100 p-4'>
      <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>Race</h1>
      {/* <DataTable columns={columnsRace} data={race}  totalPage={totalPageRace} value={`race`}/> */}
      <DataTable columns={columnsRace} data={race} pageval={pageval} />
    </div>
  )
}

export default page