import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const Data = [
    { id: 1, descricao: 'Em Aprovação' },
    { id: 2, descricao: 'Homologada' },
    { id: 3, descricao: 'Reprovada' },
    { id: 4, descricao: 'Versionada' },
  ];

  const isEmpty = await prisma.status.findMany({}).then((status) => {
    return status.length === 0;
  });

  if (isEmpty) {
    await prisma.status.createMany({
      data: Data,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
