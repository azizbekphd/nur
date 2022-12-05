import { Prisma } from "@prisma/client";

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
  },
};

type Teacher = Prisma.CourseGetPayload<typeof CoursePayloadData>;

export { CoursePayloadData };
export default Teacher;
