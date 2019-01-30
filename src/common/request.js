import axios from "axios"

var request = {

    baseURL: "http://192.168.120.139:9090/v1",
    token: "pingtouge",


    get: function (url, params) {
        url += "/"
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
        let contentType;
        if (uploadFile) {
            contentType = "multipart/form-data";
            formData = new FormData()
            for (let key in params) {
                formData.append(key, params[key]);
            }
        } else {
            contentType = "application/x-www-form-urlencoded";
            formData = JSON.stringify(params);
        }

        let config = {
            baseURL: request.baseURL,
            headers: {
                'Content-Type': contentType,
            }
        }
        return axios.post(url, formData, config);
    },

    put: function () {
        return axios.put();
    },

    delete: function (url, params) {
        let config = {
            params: params,
            baseURL: request.baseURL,
        }
        return axios.delete(url, config);
    }
}

axios.interceptors.request.use(function (config) {

    let headers = {
        ...config.headers,
        'token': request.token,
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