'use client'
import React from 'react'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const FormAddAnimal = () => {
    
}
const FormModifAnimal = ({animal,categorie,race}) => {
  
  const formSchema = z.object({
    nom: z.string().nonempty("Le nom ne peut pas être vide."),
    categorie: z.string().nonempty('La catégorie est requise.'),
    race: z.string().nonempty('La race est requise.'),
    sexe: z.string().nonempty('Le sexe est requis.'),
    
});
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: animal.nom,
      categorie : animal.categorie.id.toString(),
      sexe : animal.sexe.id.toString(),
      race : animal.race.id.toString(),
      naissance : animal.naissance,
      dateArrive : animal.dateArrive,
      descrShort : animal.descrShort,
      descr : animal.descr,
    },
  })



  function onSubmit(values) {
   
    console.log(values)
  }

  console.log(animal)
   
    return(
      <>
      <div className='container'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

          {/* Nom  */}
          <FormField
              control={form.control}
              name="nom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>nom</FormLabel>
                  <FormControl>
                    <Input placeholder={animal.nom} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          {
            [{nom: "categorie",value:categorie},
             {nom: "race",value:race}].map((item) => (
              <FormField
                control={form.control}
                name={item.nom}
                key={item.nom}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{item.nom}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={item.nom} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {
                          item.value.map((option) => (
                            <SelectItem key={option.id} value={option.id.toString()}>
                              {option.nom}
                            </SelectItem>
                              //console.log("option: ",option)
                          ))
                        }
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
      
      
      </>
    )
}

const FormSupAnimal = () => {
    
}



export { FormAddAnimal, FormSupAnimal, FormModifAnimal };

