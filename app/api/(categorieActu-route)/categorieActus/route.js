import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(req, res) {
      
      const catActu = await prisma.CategorieActu.findMany({
        // skip:skip,
        // take: itemsPerPage,
          include : {actu: true}
          
      });
      // const response = {
      //   animal,
        
      // }
      return NextResponse.json(catActu)
    
  }

  export async function POST(req, res) {

    const {nom}  = await req.json();

    const newCategorieActu = await prisma.CategorieActu.create({
      data: {
        nom: nom,
        slug : slugify(nom, {lower: true}),
        img: "www.monimage.com",
      },
    });

    console.log("ma catégorie actu envoiée : ",newCategorieActu)
    return NextResponse.json("send")

  }