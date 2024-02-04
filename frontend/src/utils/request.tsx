import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001'
});

export const setToken = (token:any) => {
    api.defaults.headers.common.Authorization = token;
};

// export const setToken = (token:any) => {
//     api.defaults.headers
// };

export const requestGET = async (route:any) =>{
    const resp = await api.get(route)
    return resp.data;
};

export const requestPOST = async ({route, body}:{route:any, body:any}) =>{
    try {
        
        const resp = await api.post(route, body);
        return resp.data;
    } catch (error) {
        console.log("AQIIIIIIIIIIIII AQIIIIIIIIIII")
        
    }
};

export const requestPOSTT = async ({route, body}:{route:any, body:any}) =>{
    try {
        console.log(body)
        const response = await axios.post(route, body, {
            headers: {
              //'Content-Type': 'multipart/form-data',
              'enctype':"multipart/form-data"
            },
        });
    } catch (error) {
        console.log(error)
        
    }
};

export const requestDELETE = async (route:any) => {
    const resp = await api.delete(route);
    return resp;
}

export const requestPUT =async (route:any) => {
    const resp = await api.put(route);
    return resp;
}