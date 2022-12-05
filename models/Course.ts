import { Prisma } from "@prisma/client";
import { TeacherPayloadData } from "./Teacher";

const CoursePayloadData = {
  include: {
    name: {
      include: {
        value: true,
      },
    },
    description: {
      include: {
        value: true,
      },
    },
    teachers: TeacherPayloadData,
  },
};

type Course = Prisma.CourseGetPayload<typeof CoursePayloadData>;

export { CoursePayloadData };
export default Course;
