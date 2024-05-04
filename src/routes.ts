import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import todasAsMaterias from "./todasAsMaterias";

const routes = Router()
const prisma = new PrismaClient()

// rota para listar todas as materias
routes.get('/listar-todas-as-materias', async (req, res) => {
  const materias = await prisma.materia.findMany()
  return res.json(materias)
})

//rota para cadastrar várias materias
routes.post('/cadastrar-varias-materias', async (req, res) => {
  const allMat = todasAsMaterias

  if(!allMat.length) {
    return res.json({message: "Não há matérias para serem cadastradas!"})
  }

  await prisma.materia.createMany({
    data: todasAsMaterias,
  })

  return res.json({message: 'Cadastro de matérias realizado com sucesso!'})
})

export default routes;
