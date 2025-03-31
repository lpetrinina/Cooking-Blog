import { useEffect, useState } from "react"
import { request } from "../utils/requester";
import { toast } from "react-toastify";
import convertDate from "../utils/convertDate";

const baseUrl = 'http://localhost:3030/data/comments'

export const useAllComments = (recipeId) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {

        const serchParams = new URLSearchParams({
            where: `recipeId="${recipeId}"`,
        })

        request('GET', `${baseUrl}?${serchParams.toString()}`)
            .then(data => {
                if (data.length > 0) {
                    const newData = data.map(item => item = {
                        ...item,
                        _createdOn: convertDate(item._createdOn)
                    })
                    return setComments(newData)
                }
                setComments(data)
            })
            .catch(err => toast.error(err.message || 'Something went wrong!'))
    }, [])

    return { comments };

}