
import { prisma } from '../index';

async function ab() {
    const users = await prisma.patients.findMany();
    console.log(users);

};


async function main() {
    const newUser = await prisma.patients.createMany({
        data: [
            {
                name: 'Alice',
                grafts: 443,
                price: 67
            },
            {
                name: 'Bob',
                grafts: 44,
                price: 23
            },
            {
                name: 'Yewande',
                grafts: 867,
                price: 67
            },
            {
                name: 'Angelique',
                grafts: 4,
                price: 23
            }
        ]
    })
    console.log(newUser)
  }
  
  ab()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })

