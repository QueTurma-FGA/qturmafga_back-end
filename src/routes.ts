import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import todasAsMaterias from "./todasAsMaterias";
import todosOsProfessores from "./todosOsProfessores";

const routes = Router();
const prisma = new PrismaClient();

routes.get('/list-all-disciplines', async (req, res) => {
  const materias = await prisma.materia.findMany();
  return res.json(materias);
});

routes.post('/register-many-disciplines', async (req, res) => {
  const allMat = todasAsMaterias;

  if (!allMat.length) {
    return res.json({ message: "Não há matérias para serem cadastradas!" });
  }

  await prisma.materia.createMany({
    data: todasAsMaterias,
  });

  return res.json({ message: 'Cadastro de matérias realizado com sucesso!' });
});

routes.get('/list-all-professors', async (req, res) => {
  const professores = await prisma.professor.findMany();
  return res.json(professores);
});

routes.post('/register-many-professors', async (req, res) => {
  const allProfessores = todosOsProfessores;

  if (!allProfessores.length) {
    return res.json({ message: "Não há professores para serem cadastrados!" });
  }

  await prisma.professor.createMany({
    data: todosOsProfessores,
  });

  return res.json({ message: 'Cadastro de professores realizado com sucesso!' });
});

routes.get('/list-all-turmas', async (req, res) => {
  const turmas = await prisma.turma.findMany({
    include: {
      materia: true,
      professor: true,
      Avaliacao: true,
    },
  });
  return res.json(turmas);
});


routes.get('/list-professors-of-turma/:codigo', async (req, res) => {
  const { codigo } = req.params;

  try {
    const turma = await prisma.turma.findUnique({
      where: { codigo },
      include: {
        professor: true,
        materia: true,
      },
    });

    if (!turma) {
      return res.status(404).json({ error: 'Turma não encontrada' });
    }

    return res.json(turma);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar os professores da turma' });
  }
});



// Rota para listar todas as avaliações
routes.get('/list-all-avaliacoes', async (req, res) => {
  try {
    const avaliacoes = await prisma.avaliacao.findMany({
      include: {
        turma: {
          include: {
            materia: true,
            professor: true,
          },
        },
      },
    });
    return res.json(avaliacoes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar as avaliações' });
  }
});

export default routes;
