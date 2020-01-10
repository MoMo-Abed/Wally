import gql from "graphql-tag";

export default gql`
  query user {
    user {
      _id

      savedImages {
        id
        color
        created_at
        updated_at
        width
        height
        description
        alt_description
        urls {
          small
          thumb
          raw
          full
        }
        links {
          self
          html
          download
          download_location
        }
        likes
        liked_by_user
        user {
          id
          username
          name
          twitter_username
          portfolio_url
          links {
            html
          }
        }
        tags {
          title
        }
      }
    }
  }
`;
