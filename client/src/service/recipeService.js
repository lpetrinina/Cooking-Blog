import { request } from "../components/utils/requester";

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

        const result = await request('POST', baseUrl, recipeData);

        return result;
    },

    async getAll() {

        const result = await request('GET', baseUrl);

        const recipes = Object.values(result);

        return recipes;
    }

}