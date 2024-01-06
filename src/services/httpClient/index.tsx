import axios, { AxiosError } from 'axios';

type callBack = (response: any) => void;
type Params = any | undefined;

const get = async (url: string, params: Params, callback: callBack) => {
    
    const axiosInstance = axios.create({ });
    
    url = `${url}?index=1`;

    if(params) {
        for(let item in params) {
            url += `&${item}=${params[item]}`;
        }
    }

    await axiosInstance.get(url).then(response => callback(response.data)).catch((error: AxiosError) => {
        console.error("Erro na solicitação: ", error);
    });
}

const post = async (url: string, params: Params, callback: callBack) => {
    
    const axiosInstance = axios.create({ });
    
    await axiosInstance.post(url, params).then(response => callback(response.data)).catch((error: AxiosError) => {
        console.error("Erro na solicitação: ", error);
    });
}

const httpClient = {
    get,
    post
}

export default httpClient;