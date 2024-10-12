/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.open(options.method || 'GET', options.url);
    xhr.responseType = 'json';
    
    xhr.onload = () => {
        if(xhr.status >= 200 && xhr.status < 300){
            options.callback(null,xhr.response);
        } else {
            options.callback(xhr.statusText, null);
        }
    }

    if(options.method === 'GET'){
        xhr.send();
    } else {
        const formData = new FormData(options.data);
        xhr.send(formData);
    }   
};
