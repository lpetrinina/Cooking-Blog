

export const request = async (method, url, data, options = {}) => {

    if (method !== 'GET') {
        options.method = method
    }

    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            body: JSON.stringify(data)
        }
    }

    const responce = await fetch(url, options);

    // TODO: Authorized GET request to /users/logout. The service returns an empty response - if you attempt to parse it as JSON, you will receive an error! You can check for this type of response by looking at the status (204 instead of 200)

    const result = await responce.json();

    return result
}