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

routes.get('/get-professor/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const professor = await prisma.professor.findUnique({
      where: { email },
      include: {
        materias: {
          include: {
            materia: true,
          },
        },
      },
    });

    if (!professor) {
      return res.status(404).json({ error: 'Professor não encontrado' });
    }

    return res.json(professor);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar o professor' });
  }
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


routes.get('/list-professors-of-turma/:materiaId', async (req, res) => {
  const { materiaId } = req.params;

  try {
    const turmas = await prisma.turma.findMany({
      where: { materiaId },
      include: {
        professor: true,
        materia: true,
      },
    });

    if (turmas.length === 0) {
      return res.status(404).json({ error: 'Turma não encontrada' });
    }

    const professors = turmas.map(turma => turma.professor);

    return res.json(professors);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar os professores da turma' });
  }
});



routes.post('/create-avaliacao', async (req, res) => {
  const { professorId, didatica, metodologia, coerenciaDeAvaliacao, disponibilidade, materiaisDeApoio } = req.body;

  if (!professorId || didatica === undefined || metodologia === undefined || coerenciaDeAvaliacao === undefined || disponibilidade === undefined || materiaisDeApoio === undefined) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    const novaAvaliacao = await prisma.avaliacao.create({
      data: {
        professorId,
        didatica,
        metodologia,
        coerenciaDeAvaliacao,
        disponibilidade,
        materiaisDeApoio
      },
    });

    return res.status(201).json(novaAvaliacao);
  } catch (error) {
    console.error('Erro ao criar a avaliação:', error);
    return res.status(500).json({ error: 'Erro ao criar a avaliação' });
  }
});



routes.get('/media-avaliacoes/:email', async (req, res) => {
  const { email } = req.params;

  try {
    
    const avaliacoes = await prisma.avaliacao.findMany({
      where: { professorId: email }
    });

    
    if (avaliacoes.length === 0) {
      return res.json({ professorEmail: email, mediaGeral: 0 });
    }

    
    const total = avaliacoes.reduce((sum, avaliacao) => {
      return sum + avaliacao.didatica + avaliacao.metodologia + avaliacao.coerenciaDeAvaliacao + avaliacao.disponibilidade + avaliacao.materiaisDeApoio;
    }, 0);

    const mediaGeral = (total / (avaliacoes.length * 5)).toFixed(2);

    return res.json({ professorEmail: email, mediaGeral: parseFloat(mediaGeral) });
  } catch (error) {
    console.error('Erro ao calcular a média das avaliações do professor:', error);
    return res.status(500).json({ error: 'Erro ao calcular a média das avaliações do professor' });
  }
});

routes.get('/avaliacoes-professor/:email/:criterio', async (req, res) => {
  const { email, criterio } = req.params;

  try {
    const professor = await prisma.professor.findUnique({
      where: { email }
    });

    if (!professor) {
      return res.status(404).json({ error: 'Professor não encontrado' });
    }

    const avaliacoes = await prisma.avaliacao.findMany({
      where: { professorId: email }
    });

    if (avaliacoes.length === 0) {
      return res.json(0);
    }

    const validCriteria = [
      'didatica',
      'metodologia',
      'coerenciaDeAvaliacao',
      'disponibilidade',
      'materiaisDeApoio'
    ];

    if (!validCriteria.includes(criterio)) {
      return res.status(400).json({ error: 'Critério inválido' });
    }

    const total = avaliacoes.reduce((sum, avaliacao) => {
      return sum + avaliacao[criterio];
    }, 0);

    const media = (total / avaliacoes.length).toFixed(2);

    return res.json(parseFloat(media));
  } catch (error) {
    console.error('Erro ao listar as avaliações do professor:', error);
    return res.status(500).json({ error: 'Erro ao listar as avaliações do professor' });
  }
});

export default routes;













