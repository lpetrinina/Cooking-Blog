const baseUrl = 'http://localhost:3030/jsonstore/recipes';

export default {

    async create(data) {

        const recipeData = {
            ...data,
            prepTime: Number(data.prepTime),
            cookTime: Number(data.cookTime),
            ingredients: data.ingredients.split('\n'),
            steps: data.steps.split('\n'),
        }

        console.log(recipeData)

        const responce = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipeData)
        });

        const result = await responce.json();

        return result;
    }

}