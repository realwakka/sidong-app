/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBoard = /* GraphQL */ `
  query GetBoard($id: ID!) {
    getBoard(id: $id) {
      id
      name
      created
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBoards = /* GraphQL */ `
  query ListBoards(
    $filter: ModelBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      name
      content
      created
      comments {
        nextToken
      }
      boardId
      board {
        id
        name
        created
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      boardPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        content
        created
        boardId
        createdAt
        updatedAt
        boardPostsId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      name
      content
      created
      postId
      post {
        id
        name
        content
        created
        boardId
        createdAt
        updatedAt
        boardPostsId
      }
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        content
        created
        postId
        createdAt
        updatedAt
        postCommentsId
      }
      nextToken
    }
  }
`;
export const boardByName = /* GraphQL */ `
  query BoardByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    boardByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const postByName = /* GraphQL */ `
  query PostByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        content
        created
        boardId
        createdAt
        updatedAt
        boardPostsId
      }
      nextToken
    }
  }
`;
export const postByBoardAndCreated = /* GraphQL */ `
  query PostByBoardAndCreated(
    $boardId: ID
    $created: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postByBoardAndCreated(
      boardId: $boardId
      created: $created
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        content
        created
        boardId
        createdAt
        updatedAt
        boardPostsId
      }
      nextToken
    }
  }
`;
export const commentByPostAndCreated = /* GraphQL */ `
  query CommentByPostAndCreated(
    $postId: ID
    $created: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentByPostAndCreated(
      postId: $postId
      created: $created
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        content
        created
        postId
        createdAt
        updatedAt
        postCommentsId
      }
      nextToken
    }
  }
`;
