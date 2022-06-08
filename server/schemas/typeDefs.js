const { gql } = require('apollo-server-express');


const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
}

type BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type Query {
  me: User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(bookData: String!): User
  removeBook(bookId: ID!): User
}

type Auth {
  token: ID!
  user: User
}
`;

module.exports = typeDefs;
