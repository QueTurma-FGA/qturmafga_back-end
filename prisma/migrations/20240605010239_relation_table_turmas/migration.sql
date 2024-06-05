-- CreateTable
CREATE TABLE "turmas" (
    "materiaId" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,

    PRIMARY KEY ("materiaId", "professorId"),
    CONSTRAINT "turmas_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materia" ("codigo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "turmas_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
