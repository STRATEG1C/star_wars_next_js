export type IPostAuthor = {
    avatar: string
    name: string
    specie: string
    home: string
}

export type IPost = {
    thumbnail: string
    author: IPostAuthor
}
