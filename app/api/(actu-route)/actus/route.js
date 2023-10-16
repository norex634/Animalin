import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(req, res) {

      const actu = await prisma.actu.findMany({
        include : {categorie: true}
      });

      // const response = {
      //   actu,
        
      // }
      return NextResponse.json(actu)
    
  }

  export async function POST(req, res) {

    const { titre, text, categorie } = await req.json();

    console.log(titre, text, categorie)
    const newActu = await prisma.actu.create({
      data: {
        titre: titre,
        slug: slugify(titre, { lower: true }),
        descr: text,
        categorie: {
          connect: { id: parseInt(categorie) },
        },
      },
    });

    console.log("mon actu envoiée : ",newActu)
    return NextResponse.json("send")
  
}

export async function PATCH(req, res) {
  const { id, titre, text, categorie } = await req.json();
  
  const ActuModif = await prisma.actu.update({
    where: {
      id: parseInt(id),
    },
    data: {
      titre: titre,
      slug: slugify(titre, { lower: true }),
      descr: text,
      categorie: {
        connect: { id: parseInt(categorie) },
      },
    },
  });

  console.log("mon actu envoiée : ",newActu)
  return NextResponse.json("send")

}