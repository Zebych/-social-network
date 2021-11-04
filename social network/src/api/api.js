import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'aaa63ed6-139f-4a73-aa64-3185c5225bcd'}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)

    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },


}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/ ${userId}`)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`/profile/status/`, {status})
    },
    //Отправить фото на сервак
    savePhoto(filePhoto) {
        debugger
        const formData = new FormData()
        formData.append('image',filePhoto)
        return instance.put(`/profile/photo/`, formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },

}