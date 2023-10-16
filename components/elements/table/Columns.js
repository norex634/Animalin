"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columnsAnimal = [
  {
    accessorKey: "categorie.nom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "nom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "race.nom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Race
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "descrShort",
    header: "descr short",
  },
  {
    id: "action",
    cell: ({row}) => {
      const animal = row.original
      const animalName = animal.nom
      const animalId = animal.id.toString()
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button varian='ghost'className="h-8 w-8 p-0 bg-slate-100 hover:bg-slate-200">
             <MoreHorizontal className="h-4 w-4 text-gray-700" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          <DropdownMenuLabel>action</DropdownMenuLabel>
          <DropdownMenuItem
          onClick={()=>{
            navigator.clipboard.writeText(animalName.toString())
          }}
          >
            copy animal name
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/admin/modif/animal/${animalId}`}>Modifier</Link>
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
export const columnsCategorieAnimal = [
  {
    accessorKey: "nom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: "action",
    cell: ({row}) => {
      const categorie = row.original
      const categorieName = categorie.nom
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button varian='ghost'className="h-8 w-8 p-0 bg-slate-100 hover:bg-slate-200">
             <MoreHorizontal className="h-4 w-4 text-gray-700" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          <DropdownMenuLabel>action</DropdownMenuLabel>
          <DropdownMenuItem
          onClick={()=>{
            navigator.clipboard.writeText(categorieName.toString())
          }}
          >
            copy categorie Name
          </DropdownMenuItem>
          <DropdownMenuItem
          onClick={()=>{
            //navigator.clipboard.writeText(animalName.toString())
          }}
          >
            Modifier
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
export const columnsRace = [
  {
    accessorKey: "nom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "animal",
    header: "animal",
  },
  {
    id: "action",
    cell: ({row}) => {
      const race = row.original
      const raceName = race.nom
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button varian='ghost'className="h-8 w-8 p-0 bg-slate-100 hover:bg-slate-200">
             <MoreHorizontal className="h-4 w-4 text-gray-700" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          <DropdownMenuLabel>action</DropdownMenuLabel>
          <DropdownMenuItem
          onClick={()=>{
            navigator.clipboard.writeText(raceName.toString())
          }}
          >
            copy categorie Name
          </DropdownMenuItem>
          <DropdownMenuItem
          onClick={()=>{
            //navigator.clipboard.writeText(animalName.toString())
          }}
          >
            Modifier
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
  
]

export const columnsActu = [
  {
    accessorKey: "titre",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          titre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "descr",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          description
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "categorie.nom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          categorie
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: "action",
    cell: ({row}) => {
      const actu = row.original
      const actuName = actu.nom
      const actuId = actu.id.toString()
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button varian='ghost'className="h-8 w-8 p-0 bg-slate-100 hover:bg-slate-200">
             <MoreHorizontal className="h-4 w-4 text-gray-700" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          <DropdownMenuLabel>action</DropdownMenuLabel>
          <DropdownMenuItem
          onClick={()=>{
            navigator.clipboard.writeText(actuName.toString())
          }}
          >
            copy animal name
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/admin/modif/animal/${actuId}`}>Modifier</Link>
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
  
  
]

export const columnsCategorieActu = [
  {
    accessorKey: "nom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: "action",
    cell: ({row}) => {
      const catActu = row.original
      const catActuName = catActu.nom
      const catActuId = catActu.id.toString()
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button varian='ghost'className="h-8 w-8 p-0 bg-slate-100 hover:bg-slate-200">
             <MoreHorizontal className="h-4 w-4 text-gray-700" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          <DropdownMenuLabel>action</DropdownMenuLabel>
          <DropdownMenuItem
          onClick={()=>{
            navigator.clipboard.writeText(catActuName.toString())
          }}
          >
            copy animal name
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/admin/modif/animal/${catActuId}`}>Modifier</Link>
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
  
  
]


export const columnsUser = [
  {
    accessorKey: "nom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },

  {
    accessorKey: "prenom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Prenom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },

  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: "action",
    cell: ({row}) => {
      const user = row.original
      const userName = user.nom
      const userId = user.id.toString()
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button varian='ghost'className="h-8 w-8 p-0 bg-slate-100 hover:bg-slate-200">
             <MoreHorizontal className="h-4 w-4 text-gray-700" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          <DropdownMenuLabel>action</DropdownMenuLabel>
          <DropdownMenuItem
          onClick={()=>{
            navigator.clipboard.writeText(userName.toString())
          }}
          >
            copy animal name
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/admin/modif/animal/${userId}`}>Modifier</Link>
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
  
  
]

export const columnsFaq = [
  {
    accessorKey: "question",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Question
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },

  {
    accessorKey: "reponse",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Reponse
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },

  {
    accessorKey: "link",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Link
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: "action",
    cell: ({row}) => {
      const faq = row.original
      const faqQuestion = faq.question
      const faqId = faq.id.toString()
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button varian='ghost'className="h-8 w-8 p-0 bg-slate-100 hover:bg-slate-200">
             <MoreHorizontal className="h-4 w-4 text-gray-700" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          <DropdownMenuLabel>action</DropdownMenuLabel>
          <DropdownMenuItem
          onClick={()=>{
            navigator.clipboard.writeText(faqQuestion.toString())
          }}
          >
            copy animal name
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/admin/modif/animal/${faqId}`}>Modifier</Link>
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
  
  
]