export default `


type User {
    _id: ID!
    name: String!
    deviceName: String!
    password: String!
    savedImages: [Images]
}

type Auth {
    token: String!
  }


type ImageUserLinks{
    self:String,
    html:String,
}

type ImagesUser{
    id: String,
    username:String,
    name:String,
    twitter_username:String,
    portfolio_url:String,
    links:ImageUserLinks
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

type Tags{
    title:String,

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
    tags:[Tags]
}

input Image {
    id: String,
    created_at: String,
    updated_at: String,
    width: Int,
    height: Int,
    color: String,
    description: String,
    alt_description: String,
    urls:ImageUrls ,
    links: ImageLinks,
    likes: Int,
    liked_by_user: Boolean,
    user: ImageUser,
    tags: [Tag],
}

input ImageLinks{
    self: String,
    html: String,
    download: String,
    download_location: String
}

input ImageUrls{
    small: String,
    thumb: String,
    raw: String,
    full: String
}

input ImageUserLink{
    self:String,
    html:String,
}

input ImageUser{
    id: String,
    username:String,
    name:String,
    twitter_username:String,
    portfolio_url:String,
    links:ImageUserLink
}

input Tag{
    title:String,

}



input DeviceInfo{
    PhoneId:String
    deviceName:String
    Platform:String
}

type RootQuery {
    user: User!
    getImages(value:String!): [Images]
    getSimilarImages(value:String!):[Images]
}

type RootMutation {

    CreateSaved(inputs:Image):Images,
    CreateToken(inputs:DeviceInfo):Auth!

  
}

schema {
    query: RootQuery
    mutation: RootMutation
}



`;
