// similar code to dog and 
const express = require("express");

const app = express();
const PORT = 23110;

app.use(express.json());
// CatTime master list
const catBreeds = [
    { name: 'Maine Coon', size: 9, energyLevel: 7, sociability: 8, coatLength: 7, livingSpace: 6, experienceWithCats: 4 },
    { name: 'Siamese', size: 5, energyLevel: 9, sociability: 9, coatLength: 2, livingSpace: 5, experienceWithCats: 5 },
    { name: 'Persian', size: 7, energyLevel: 4, sociability: 7, coatLength: 9, livingSpace: 4, experienceWithCats: 4 },
    { name: 'Ragdoll', size: 8, energyLevel: 5, sociability: 10, coatLength: 8, livingSpace: 5, experienceWithCats: 3 },
    { name: 'Bengal', size: 6, energyLevel: 10, sociability: 8, coatLength: 2, livingSpace: 6, experienceWithCats: 6 },
    { name: 'British Shorthair', size: 7, energyLevel: 4, sociability: 7, coatLength: 3, livingSpace: 4, experienceWithCats: 2 },
    { name: 'Sphynx', size: 5, energyLevel: 8, sociability: 9, coatLength: 1, livingSpace: 4, experienceWithCats: 5 },
    { name: 'Russian Blue', size: 6, energyLevel: 5, sociability: 6, coatLength: 3, livingSpace: 4, experienceWithCats: 3 },
    { name: 'Scottish Fold', size: 6, energyLevel: 5, sociability: 8, coatLength: 3, livingSpace: 4, experienceWithCats: 3 },
    { name: 'Birman', size: 6, energyLevel: 6, sociability: 9, coatLength: 6, livingSpace: 5, experienceWithCats: 3 },
    { name: 'Abyssinian', size: 5, energyLevel: 10, sociability: 8, coatLength: 2, livingSpace: 5, experienceWithCats: 6 },
    { name: 'Oriental', size: 5, energyLevel: 9, sociability: 9, coatLength: 2, livingSpace: 5, experienceWithCats: 5 },
    { name: 'Norwegian Forest Cat', size: 8, energyLevel: 7, sociability: 8, coatLength: 9, livingSpace: 6, experienceWithCats: 4 },
    { name: 'Burmese', size: 6, energyLevel: 7, sociability: 9, coatLength: 2, livingSpace: 5, experienceWithCats: 3 },
    { name: 'American Shorthair', size: 6, energyLevel: 6, sociability: 7, coatLength: 3, livingSpace: 5, experienceWithCats: 3 },
    { name: 'Devon Rex', size: 5, energyLevel: 9, sociability: 9, coatLength: 2, livingSpace: 4, experienceWithCats: 4 },
    { name: 'Himalayan', size: 7, energyLevel: 4, sociability: 7, coatLength: 8, livingSpace: 5, experienceWithCats: 4 },
    { name: 'Tonkinese', size: 5, energyLevel: 8, sociability: 9, coatLength: 2, livingSpace: 5, experienceWithCats: 3 },
    { name: 'Savannah', size: 9, energyLevel: 10, sociability: 7, coatLength: 3, livingSpace: 6, experienceWithCats: 7 },
    { name: 'Chartreux', size: 6, energyLevel: 5, sociability: 8, coatLength: 3, livingSpace: 5, experienceWithCats: 2 },
    { name: 'Balinese', size: 6, energyLevel: 8, sociability: 9, coatLength: 6, livingSpace: 5, experienceWithCats: 4 },
    { name: 'Burmilla', size: 6, energyLevel: 6, sociability: 8, coatLength: 4, livingSpace: 4, experienceWithCats: 3 },
    { name: 'Cornish Rex', size: 5, energyLevel: 8, sociability: 9, coatLength: 2, livingSpace: 4, experienceWithCats: 4 },
    { name: 'Egyptian Mau', size: 6, energyLevel: 9, sociability: 8, coatLength: 3, livingSpace: 5, experienceWithCats: 5 },
    { name: 'Ocicat', size: 7, energyLevel: 8, sociability: 8, coatLength: 3, livingSpace: 6, experienceWithCats: 5 }
];

function calculateScore(userCriteria, breed) {
    let score = 0;
    score += Math.abs(userCriteria.size - breed.size);
    score += Math.abs(userCriteria.energyLevel - breed.energyLevel);
    score += Math.abs(userCriteria.sociability - breed.sociability);
    score += Math.abs(userCriteria.coatLength - breed.coatLength);
    score += Math.abs(userCriteria.livingSpace - breed.livingSpace);
    score += Math.abs(userCriteria.experienceWithCats - breed.experienceWithCats);
    return score;
}

app.post('/cat-breed', (req, res) => {
    const userCriteria = req.body;
    console.log(userCriteria);

    let bestMatch = null;
    let lowestScore = Infinity;
    // loop and save best match
    catBreeds.forEach(breed => {
        const score = calculateScore(userCriteria, breed);
        if (score < lowestScore) {
            lowestScore = score;
            bestMatch = breed;
        }
    });

    res.json({ breed: bestMatch.name });
});

app.listen(PORT, () => {
    console.log(`Cat breed recommendation microservice listening on port ${PORT}`);
});
