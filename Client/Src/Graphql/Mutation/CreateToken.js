import gql from "graphql-tag";

export default gql`
  mutation CreateToken($inputs: DeviceInfo) {
    CreateToken(inputs: $inputs) {
      token
    }
  }
`;
