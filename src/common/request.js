import axios from "axios"

var request = {

    baseURL: "http://192.168.120.139:9090/v1",
    code: "pingtouge",

    get: function (url, params) {
        let config = {
            params: params,
            baseURL: request.baseURL,

        }
        return axios.get(url, config);
    },

    post: function (url, params) {

        let uploadFile = false;

        for (let key in params) {
            if (params[key].toString() == '[object File]') {
                uploadFile = true;
                break;
            }
        }

        let formData;
        if (uploadFile) {
            formData = new FormData()
            for (let key in params) {
                formData.append(key, params[key]);
            }
        } else {
            formData = JSON.stringify(params);
        }

        let config = {
            baseURL: request.baseURL,
        }
        return axios.post(url, formData, config);
    },

    put: function () {
        return axios.put();
    },

    delete: function () {
        return axios.delete();
    }
}

axios.interceptors.request.use(function (config) {

    let headers = {
        ...config.headers,
        'code': request.code,
    }

    let updateConfig = {
        ...config,
        headers
    }

    return updateConfig;
}, function (error) {

    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    console.log('response', response);
    return response;
}, function (error) {
    if (error.response == undefined) {
        error.response = {};
        error.response.status = 500;
        error.response.msg = '请求异常，请稍后联系';
    }

    let status = error.response.status;
    console.log(error.response);
    switch (status) {
        case 403:
            this.router.push({ name: "Login" });
            break;
        case 404:
            break;
        default:
    }
    return Promise.reject(error.response)
});

export default request;