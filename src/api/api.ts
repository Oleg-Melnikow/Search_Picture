import axios from 'axios'

const instance = (tags: string) => axios.create({
    baseURL: `https://www.flickr.com/services/rest/`,
    params: {
        method: `flickr.photos.search`,
        api_key: process.env.REACT_APP_API_KEY,
        extras: "original_format",
        tags,
        page: 1,
        format: 'json',
        nojsoncallback: 1,
        per_page: 7,
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
}

export const appAPI = {
    getPictures(tags: string) {
        return instance(tags).get<ResponseType>(``)
    }
}