import axios from "axios"

var req = {

    get: function (url, data) {
        return axios.get()
    },

    post: function () {
        return axios.post();
    },

    put: function () {
        return axios.put();
    },

    delete: function () {
        return axios.delete();
    }
}

axios.interceptors.request.use(function (config) {

}, function (error) {

})