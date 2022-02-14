import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation createUser($email: String, $password: String, $name: String) {
    createUser(email: $email, password: $password, name: $name) {
      email
      name
    }
  }
`;
