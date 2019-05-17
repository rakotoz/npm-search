// import GitHub from 'github-api';

// const getUserName = url=> {
//     const parsedUrl = url.split('/');
//     return parsedUrl[parsedUrl.length-2];
// }

export const search = (value)=> {
    const url = `https://registry.npmjs.org/-/v1/search?text=${value}&size=25`;
    return fetch(url, {
        method: 'GET'
    })
    .then(response=> {
        return response.json()
    })
    .then(response=> {
        return response
    })
}

export const getDetail = (value)=> {
    const url = `https://registry.npmjs.org/${value}`;
    return fetch(url, {
        method: 'GET'
    })
    .then(response=> {
        return response.json()
    })
    .then(response=> {
        return response
    })
    .catch(error=> {
        console.log(error)
    })
}

export const getCurrent = (value)=> {
    const url = `https://registry.npmjs.org/${value.name}/${value.version}`;
    return fetch(url, {
        method: 'GET'
    })
    .then(response=> {
        return response.json()
    })
    .then(response=> {
        return response
    })
    .catch(error=> {
        console.log(error)
    })
}
