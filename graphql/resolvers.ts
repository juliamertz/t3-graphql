import { prisma } from "@server/db/client";

export const resolvers = {
  Query: {
    example: async () => {
      return await prisma.example.findMany();
    },
  },
  Mutation: {
    example: async () => {
      const result = await prisma.example.create({ data: {} });
      return result.id;
    },
  },
};
