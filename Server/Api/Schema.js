export default `


type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    SavedImages: [Images!]!
}



type ImagesUser{
    id: String,
    username:String,
    name:String
}


type ImagesLinks{
    self: String,
    html: String,
    download: String,
    download_location: String
}


type ImagesUrls{
    small: String,
    thumb: String,
    raw: String,
    full: String
}

type Images {
    id: String,
    created_at: String,
    updated_at: String,
    width: Int,
    height: Int,
    color: String,
    description: String,
    alt_description: String,
    urls:ImagesUrls ,
    links: ImagesLinks,
    likes: Int,
    liked_by_user: Boolean,
    user: ImagesUser,
}
type Auth {
    token: String!
  }


type RootQuery {
    login(email: String!, password: String!): AuthData!
    user: User!
    getImages: [Images]
}

type RootMutation {
    login(email: String!, password: String!): AuthData!

    createUser(
        email: String!,
    name: String!,
    password: String!,
    ): Auth
  
}

schema {
    query: RootQuery
    mutation: RootMutation
}



`;
