import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(req) {
 
   

       const categorie = await prisma.categorieAnimal.findMany();
      
       

       return NextResponse.json(categorie)
    
  }

     export async function POST(req) {
     
     const { nom, img } = await req.json();
     
     const newCategorie = await prisma.categorieAnimal.create({
          data: {
          nom: nom,
          slug: slugify(nom, { lower: true }),
          img: img,
          },
     });
     
     console.log("ma categorie envoiée : ",newCategorie)
     return NextResponse.json("send")
     }