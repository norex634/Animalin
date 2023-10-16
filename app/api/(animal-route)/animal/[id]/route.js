import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req,{params}) {
 
      //console.log(params)
   

       const animal = await prisma.animal.findUnique({
       where : {
        id : parseInt(params.id) 
       },
           include : {categorie: true, sexe:true, race:true, image:true}
       });
       //console.log(animal)


       return NextResponse.json(animal)
    
  }