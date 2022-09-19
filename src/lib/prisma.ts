import pkg, { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  const { PrismaClient: PrismaClientProd } = pkg
  prisma = new PrismaClientProd()
} else {
  prisma = new PrismaClient()
}

export { prisma };

