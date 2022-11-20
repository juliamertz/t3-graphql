import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Example {
    id: String
  }

  type Query {
    example: [Example]
  }

  type Mutation {
    example(id: String): String!
  }
`;
