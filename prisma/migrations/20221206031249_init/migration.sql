-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'TEACHER', 'ADMIN');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "LocaleString" (
    "id" SERIAL NOT NULL,
    "en" TEXT NOT NULL,
    "ru" TEXT NOT NULL,
    "uz" TEXT NOT NULL,

    CONSTRAINT "LocaleString_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeacherName" (
    "id" SERIAL NOT NULL,
    "valueId" INTEGER NOT NULL,
    "teacherId" TEXT NOT NULL,

    CONSTRAINT "TeacherName_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeacherRole" (
    "id" SERIAL NOT NULL,
    "valueId" INTEGER NOT NULL,
    "teacherId" TEXT NOT NULL,

    CONSTRAINT "TeacherRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeacherBio" (
    "id" SERIAL NOT NULL,
    "valueId" INTEGER NOT NULL,
    "teacherId" TEXT NOT NULL,

    CONSTRAINT "TeacherBio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "nameId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "bioId" INTEGER NOT NULL,
    "image" TEXT,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseName" (
    "id" SERIAL NOT NULL,
    "valueId" INTEGER NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "CourseName_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseDescription" (
    "id" SERIAL NOT NULL,
    "valueId" INTEGER NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "CourseDescription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "image" TEXT,
    "nameId" INTEGER NOT NULL,
    "descriptionId" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CourseToTeacher" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherName_valueId_key" ON "TeacherName"("valueId");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherRole_valueId_key" ON "TeacherRole"("valueId");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherBio_valueId_key" ON "TeacherBio"("valueId");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_nameId_key" ON "Teacher"("nameId");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_roleId_key" ON "Teacher"("roleId");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_bioId_key" ON "Teacher"("bioId");

-- CreateIndex
CREATE UNIQUE INDEX "CourseName_valueId_key" ON "CourseName"("valueId");

-- CreateIndex
CREATE UNIQUE INDEX "CourseDescription_valueId_key" ON "CourseDescription"("valueId");

-- CreateIndex
CREATE UNIQUE INDEX "Course_nameId_key" ON "Course"("nameId");

-- CreateIndex
CREATE UNIQUE INDEX "Course_descriptionId_key" ON "Course"("descriptionId");

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToTeacher_AB_unique" ON "_CourseToTeacher"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToTeacher_B_index" ON "_CourseToTeacher"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherName" ADD CONSTRAINT "TeacherName_valueId_fkey" FOREIGN KEY ("valueId") REFERENCES "LocaleString"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherRole" ADD CONSTRAINT "TeacherRole_valueId_fkey" FOREIGN KEY ("valueId") REFERENCES "LocaleString"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherBio" ADD CONSTRAINT "TeacherBio_valueId_fkey" FOREIGN KEY ("valueId") REFERENCES "LocaleString"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "teacherBio_fk" FOREIGN KEY ("bioId") REFERENCES "TeacherBio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "teacherName_fk" FOREIGN KEY ("nameId") REFERENCES "TeacherName"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "teacherRole_fk" FOREIGN KEY ("roleId") REFERENCES "TeacherRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseName" ADD CONSTRAINT "CourseName_valueId_fkey" FOREIGN KEY ("valueId") REFERENCES "LocaleString"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseDescription" ADD CONSTRAINT "CourseDescription_valueId_fkey" FOREIGN KEY ("valueId") REFERENCES "LocaleString"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "courseDescription_fk" FOREIGN KEY ("descriptionId") REFERENCES "CourseDescription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "courseName_fk" FOREIGN KEY ("nameId") REFERENCES "CourseName"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToTeacher" ADD CONSTRAINT "_CourseToTeacher_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToTeacher" ADD CONSTRAINT "_CourseToTeacher_B_fkey" FOREIGN KEY ("B") REFERENCES "Teacher"("id") ON DELETE CASCADE ON UPDATE CASCADE;
