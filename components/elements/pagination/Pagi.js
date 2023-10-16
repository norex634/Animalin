"use client"
import React, {useState} from 'react'

import { Button } from "@/components/ui/button"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

const Pagi = ({totalPage, value}) => {
    const router = useRouter()
    const getUrl = usePathname()
    //animal
    const paramPageAnimal = useSearchParams().get("pa") || 1
    const [currentPageAnimal,setPageAnimal] = useState(Number(paramPageAnimal)) ;

    //categorieAnimal
    const paramPageCategorieAnimal = useSearchParams().get("pca") || 1
    const [currentPageCategorieAnimal,setPageCategorieAnimal] = useState(Number(paramPageCategorieAnimal)) ;

    //Race
    const paramPageRace = useSearchParams().get("pr") || 1
    const [currentPageRace,setPageRace] = useState(Number(paramPageCategorieAnimal)) ;

    const onPageChangeAnimal = (page)=>{
      const originurl = new URL(window.location.href)
      if(value == "animal"){
        setPageAnimal(page)
        originurl.searchParams.set('pa',String(page))
      }else if(value == "categorie"){
        setPageCategorieAnimal(page)
        originurl.searchParams.set('pca',String(page))
      }else{
        setPageRace(page)
        originurl.searchParams.set('pr',String(page))
      }

      // const url = getUrl+'?pa='+page
      // setPageAnimal(page)
      router.push(originurl.toString())
    }

  return (
    <>
    <div className="flex items-center justify-center space-x-2 py-4">
        {value == "animal" ? (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChangeAnimal(currentPageAnimal-1)}
              disabled={currentPageAnimal === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChangeAnimal(currentPageAnimal+1)}
              disabled={currentPageAnimal === totalPage}
            >
              Next
            </Button>
          </> 
        ):value=="categorie" ? (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChangeAnimal(currentPageCategorieAnimal-1)}
              disabled={currentPageCategorieAnimal === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChangeAnimal(currentPageCategorieAnimal+1)}
              disabled={currentPageCategorieAnimal === totalPage}
            >
              Next
            </Button>
          </> 
        ):value == "race" ? (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChangeAnimal(currentPageRace-1)}
              disabled={currentPageRace === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChangeAnimal(currentPageRace+1)}
              disabled={currentPageRace === totalPage}
            >
              Next
            </Button>
          </> 
        ):null}
         
      </div>
    </>
  )
}

export default Pagi