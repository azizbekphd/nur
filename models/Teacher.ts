import { Prisma } from "@prisma/client";

const TeacherPayloadData = {
  include: {
    name: {
      include: {
        value: true,
      },
    },
    role: {
      include: {
        value: true,
      },
    },
    bio: {
      include: {
        value: true,
      },
    },
  },
};

type Teacher = Prisma.TeacherGetPayload<typeof TeacherPayloadData>;

export { TeacherPayloadData };
export default Teacher;
