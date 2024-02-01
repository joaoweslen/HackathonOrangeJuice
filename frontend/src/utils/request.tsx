import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001'
});

export const setToken = (token:any) => {
    api.defaults.headers.common.Authorization = token;
};

export const requestGET = async (route:any) =>{
    const resp = await api.get(route)
    return resp.data;
};

export const requestPOST = async ({route, body}:{route:any, body:any}) =>{
    
    const resp = await api.post(route, body);
    console.log("AQIIIIIIIIIIIII AQIIIIIIIIIII")
    return resp.data;
};

export const requestDELETE = async (route:any) => {
    const resp = await api.delete(route);
    return resp;
}

export const requestPUT =async (route:any) => {
    const resp = await api.put(route);
    return resp;
}