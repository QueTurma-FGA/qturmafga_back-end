import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import todasAsMaterias from "./todasAsMaterias";
import todosOsProfessores from "./todosOsProfessores";

const routes = Router()
const prisma = new PrismaClient()

routes.get('/list-all-disciplines', async (req, res) => {
  const materias = await prisma.materia.findMany()
  return res.json(materias)
})

routes.post('/register-many-disciplines', async (req, res) => {
  const allMat = todasAsMaterias

  if(!allMat.length) {
    return res.json({message: "Não há matérias para serem cadastradas!"})
  }

  await prisma.materia.createMany({
    data: todasAsMaterias,
  })

  return res.json({message: 'Cadastro de matérias realizado com sucesso!'})
})

routes.get('/list-all-professors', async (req, res) => {
  const professores = await prisma.professor.findMany() 
  return res.json(professores)
})

routes.post('/register-many-professors', async (req, res) => {
  const allProfessores = todosOsProfessores 

  if(!allProfessores.length) {
    return res.json({message: "Não há professores para serem cadastrados!"})
  }

  await prisma.professor.createMany({ 
    data: todosOsProfessores,
  })

  return res.json({message: 'Cadastro de professores realizado com sucesso!'})
})

routes.get('/list-professors-of-discipline/:codigo', async (req, res) => {
  const { codigo } = req.params

  const professorsList = await prisma.materia.findUnique({
    where: { codigo },
    include: {
      professors: {
        include: {
          professor: true
        }
      }
    }
  })

  return res.json(professorsList)
})

routes.get('/list-disciplines-of-professor/:email', async (req, res) => {
  const { email } = req.params

  const disciplinesList = await prisma.professor.findUnique({
    where: { email },
    include: {
      materias: {
        include: {
          materia: true
        }
      }
    }
  })

  return res.json(disciplinesList)
})

export default routes;
