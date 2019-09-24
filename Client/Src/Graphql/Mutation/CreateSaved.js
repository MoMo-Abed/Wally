import gql from "graphql-tag";

export default gql`
  mutation CreateSaved($inputs: Image) {
    CreateSaved(inputs: $inputs) {
      id
    }
  }
`;
