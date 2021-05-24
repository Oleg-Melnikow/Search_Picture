import axios from 'axios'

const setInstance = (tags: string, page: number = 1) => axios.create({
    baseURL: `https://www.flickr.com/services/rest/`,
    params: {
        method: `flickr.photos.search`,
        api_key: process.env.REACT_APP_API_KEY,
        extras: "original_format",
        tags,
        page,
        format: 'json',
        nojsoncallback: 1,
        per_page: 15,
    }
})

export type PhotoType = {
    farm: number
    id: string
    isfamily: number
    isfriend: number
    ispublic: number
    owner: string
    secret: string
    server: string
    title: string
    originalformat?: string
    originalsecret?: string
}

export type PhotosType = {
    page: number,
    pages: number,
    perpage: number,
    total: number,
    photo: Array<PhotoType>
}

export type ResponseType = {
    photos: PhotosType
    stat: string
    code?: number
    message?: string
}

export const appAPI = {
    getPictures(tags: string, page?: number) {
        return setInstance(tags, page).get<ResponseType>(``)
    }
}