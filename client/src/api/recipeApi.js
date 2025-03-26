import { useEffect, useState } from "react";

import { request } from "../utils/requester";
import formatData from "../utils/formatData"
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/recipes';

//use hook on event
export const useCreateRecipe = () => {
    const { options } = useAuth();

    const create = (data) => {
        const recipeData = formatData(data);

        return request('POST', baseUrl, recipeData, options);
    }

    return {
        create
    }
}


//use hook on mount
export const useAllRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [isPending, setPending] = useState(true);

    useEffect(() => {

        const serchParams = new URLSearchParams({
            select: '_id,title,description,prepTime,cookTime,imageUrl'
        })

        request('GET', `${baseUrl}?${serchParams}`)
            .then((data) => setRecipes(data))
            .then(() => setPending(false))

    }, []);

    return {
        isPending,
        recipes
    }
}


//use on mount
export const useLatestRecipes = () => {
    const [latestRecipes, setLatestRecipes] = useState([]);
    const [isPending, setPending] = useState(true);

    const PAGE_SIZE = 3;

    useEffect(() => {
        const serchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: PAGE_SIZE,
            select: '_id,title,description,prepTime,cookTime,imageUrl'
        })

        request('GET', `${baseUrl}?${serchParams.toString()}`)
            .then((data) => setLatestRecipes(data))
            .then(() => setPending(false))
    }, [])

    return {
        latestRecipes,
        isPending
    };

}

//use hook on mount
export const useOneRecipe = (recipeId) => {
    const [recipe, setRecipe] = useState({});
    const [isPending, setPending] = useState(true);

    useEffect(() => {
        request('GET', `${baseUrl}/${recipeId}`)
            .then((data) => setRecipe(data))
            .then(() => setPending(false));
    }, [])

    return {
        recipe,
        isPending
    }
}

// use hook on event
export const useEditRecipe = () => {
    const { options } = useAuth();

    const edit = async (recipeId, data) => {

        const recipeData = formatData(data);

        return await request('PUT', `${baseUrl}/${recipeId}`, { ...recipeData, _id: recipeId }, options);
    }

    return {
        edit
    }
}

export const useDeleteRecipe = () => {
    const { options } = useAuth();

    const deleteRecipe = (recipeId) => {
        return request('DELETE', `${baseUrl}/${recipeId}`, null, options)
    }

    return {
        deleteRecipe
    }
}