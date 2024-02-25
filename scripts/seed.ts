const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "Informatique" },
                { name: "Musique" },
                { name: "Fitness" },
                { name: "Photographie" },
                { name: "Comptabilité" },
                { name: "Ingénierie" },
                { name: "Graphisme" },
            ]
        });

        console.log("Succès");
    } catch (error) {
        console.log("Erreur lors de l'amorçage des catégories de base de données", error);
    } finally {
        await database.$disconnect();
    }
}

main();

