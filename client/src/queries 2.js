import { gql } from "@apollo/client";

export const GET_ALL_CONTENT = gql`
  query {
    getAllContent {
      title
      author
      descr
      genre
      status
    }
  }
`;

export const GET_AVAILABLE = gql`
  query {
    getAvailable {
      title
      author
      descr
      genre
    }
  }
`;

export const GET_STATUS = gql`
  query getByStatus($contentStatus: String!) {
    getByStatus(contentStatus: $contentStatus) {
      title
      author
      descr
      genre
      status
    }
  }
`;

export const GET_GENRE = gql`
  query getByGenre($contentGenre: String!) {
    getByGenre(contentGenre: $contentGenre) {
      title
      author
      descr
      genre
      status
    }
  }
`;

export const GET_TITLE = gql`
  query getByTitle($contentTitle: String!) {
    getByTitle(contentTitle: $contentTitle) {
      title
      author
      descr
      genre
      status
    }
  }
`;

export const GET_AUTHOR = gql`
  query getByAuthor($contentAuthor: String!) {
    getByAuthor(contentAuthor: $contentAuthor) {
      title
      author
      descr
      genre
      status
    }
  }
`;

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      userName
      password
    }
  }
`;

export const GET_USER = gql`
  query getUser($userName: String!) {
    getUser(userName: $userName) {
      userName
      password
    }
  }
`;

export const NEW_USER = gql`
  mutation newUser($userName: String!, $password: String!) {
    newUser(userName: $userName, password: $password) {
      token
      user {
        _id
        userName
        password
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
        userName
        password
      }
    }
  }
`;
