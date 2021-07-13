import axios from "axios";


const instance = axios.create({
    withCredentials: true,//withCredentials=> отправляет на сервер куку для авторизации
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c48f3115-8ef6-4eff-913e-2249d6f1fd23"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {})
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)

    },
    getProfile(userId: number) {
        console.warn('Obsolete method.Please profileAPI object')
        return profileAPI.getProfile(userId)

    }
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`/profile/${userId}`)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile:any){
        if (!photoFile) return;
        const formData = new FormData()
        formData.append("image",photoFile)
        return instance.put(`profile/photo`, formData,{
            headers: {
                'Content-Type':"multipart/form-data"
            }})
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email:string, password:string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}


