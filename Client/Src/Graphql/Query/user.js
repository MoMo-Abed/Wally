import gql from "graphql-tag";

export default gql`
  query user {
    user {
      _id
      email
      name
      country
    }
  }
`;
