import React from 'react'
import { GetAnimal } from '@/components/fetch/Animal'
import { GetAllCategorieAnimal } from '@/components/fetch/CategorieAnimal'
import { GetAllRaceAnimal } from '@/components/fetch/Race'
import {FormModifAnimal} from '@/components/form/FormAnimal'

const route = async ({params}) => {
  const idAnimal = params.id
  const animal = await GetAnimal(idAnimal);
  const categorie = await GetAllCategorieAnimal();
  const race = await GetAllRaceAnimal();
  
  
  return (
    // info animal
    <>
    
    <div className="w-full">
      <FormModifAnimal animal={animal} categorie={categorie} race={race}/>
    </div>
    
    
    
    </>
  )
}

export default route