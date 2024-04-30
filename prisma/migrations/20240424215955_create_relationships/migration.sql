-- CreateTable
CREATE TABLE "ParentsOnStudents" (
    "studentId" TEXT NOT NULL,
    "parentId" TEXT NOT NULL,

    CONSTRAINT "ParentsOnStudents_pkey" PRIMARY KEY ("studentId","parentId")
);

-- AddForeignKey
ALTER TABLE "ParentsOnStudents" ADD CONSTRAINT "ParentsOnStudents_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentsOnStudents" ADD CONSTRAINT "ParentsOnStudents_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "parents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
