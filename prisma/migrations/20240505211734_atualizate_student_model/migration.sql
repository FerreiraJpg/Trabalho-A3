/*
  Warnings:

  - The primary key for the `ParentsOnStudents` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `parentId` on the `ParentsOnStudents` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `ParentsOnStudents` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `students` table. All the data in the column will be lost.
  - Added the required column `parent_id` to the `ParentsOnStudents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `ParentsOnStudents` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ParentsOnStudents" DROP CONSTRAINT "ParentsOnStudents_parentId_fkey";

-- DropForeignKey
ALTER TABLE "ParentsOnStudents" DROP CONSTRAINT "ParentsOnStudents_studentId_fkey";

-- AlterTable
ALTER TABLE "ParentsOnStudents" DROP CONSTRAINT "ParentsOnStudents_pkey",
DROP COLUMN "parentId",
DROP COLUMN "studentId",
ADD COLUMN     "parent_id" TEXT NOT NULL,
ADD COLUMN     "student_id" TEXT NOT NULL,
ADD CONSTRAINT "ParentsOnStudents_pkey" PRIMARY KEY ("student_id", "parent_id");

-- AlterTable
ALTER TABLE "students" DROP COLUMN "email";

-- AddForeignKey
ALTER TABLE "ParentsOnStudents" ADD CONSTRAINT "ParentsOnStudents_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentsOnStudents" ADD CONSTRAINT "ParentsOnStudents_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "parents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
