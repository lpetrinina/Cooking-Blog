import formatData from "../components/utils/formatData";
import { request } from "../components/utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/recipes';

export default {

    async create(data) {

        const recipeData = formatData(data);

        const result = await request('POST', baseUrl, recipeData);

        return result;
    },

    delete(recipeId) {
        return request('DELETE', `${baseUrl}/${recipeId}`)
    },

    async getAll() {

        const result = await request('GET', baseUrl);

        const recipes = Object.values(result);

        return recipes;
    },

    async getOne(recipeId) {

        const recipe = await request('GET', `${baseUrl}/${recipeId}`);

        return recipe;
    },

    async edit(recipeId, data) {

        const recipeData = formatData(data);

        const result = await request('PUT', `${baseUrl}/${recipeId}`, { ...recipeData, _id: recipeId });

        return result;
    },


}

