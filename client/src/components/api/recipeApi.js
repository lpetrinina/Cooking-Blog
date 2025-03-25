import { useContext } from "react";
import formatData from "../utils/formatData"
import { request } from "../utils/requester";
import { UserContext } from "../../contexts/UserContext";

const baseUrl = 'http://localhost:3030/data/recipes';

//use hook on event
export const useCreateRecipe = () => {
    const { accessToken } = useContext(UserContext);

    const options = {
        headers: {
            'X-Authorization': accessToken
        }
    };

    const create = (data) => {
        const recipeData = formatData(data);

        return request('POST', baseUrl, recipeData, options);
    }

    return {
        create
    }

}