/*
  Warnings:

  - You are about to drop the `avaliacoes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "avaliacoes";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "professorId" TEXT NOT NULL,
    "didatica" INTEGER NOT NULL,
    "metodologia" INTEGER NOT NULL,
    "coerenciaDeAvaliacao" INTEGER NOT NULL,
    "disponibilidade" INTEGER NOT NULL,
    "materiaisDeApoio" INTEGER NOT NULL,
    CONSTRAINT "Avaliacao_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
