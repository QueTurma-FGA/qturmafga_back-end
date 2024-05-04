import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const routes = Router()
const prisma = new PrismaClient()

routes.get('/materias', async (req, res) => {

  const materias = await prisma.materia.findMany()

  return res.json(materias)
})

routes.post('/materia', async (req , res) => {
  const data = req.body
  console.log(data)

  // await prisma.materia.create({
  //   data: { codigo: 'adsf', nome: 'Elsa Prisma'},
  // })

  return res.json({message: "Cadastro realizado"})
})

export default routes;
