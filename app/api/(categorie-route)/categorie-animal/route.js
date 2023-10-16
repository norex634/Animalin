import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
      
    
    // const itemsPerPage = 5; 
    // const totalCount = await prisma.CategorieAnimal.count()
    // const totalPageCategorie = Math.ceil(totalCount/itemsPerPage)
   
    // const paramPageAnimal = parseInt(req.nextUrl.searchParams.get("pca")) || 1
    // const skip = (paramPageAnimal - 1 ) * itemsPerPage; 
   
    // // Vérification pour vous assurer que la page demandée n'est pas en dehors des limites
    // if (paramPageAnimal < 1 || paramPageAnimal > totalPageCategorie) {
    //   return NextResponse.error("Page invalide", 400);
    // }

    const categorie = await prisma.CategorieAnimal.findMany({
      // skip:skip,
      // take: itemsPerPage,
      });

      // const response = {
      //   categorie,
      //   totalPageCategorie
      // }
      
      return NextResponse.json(categorie)
    
  }