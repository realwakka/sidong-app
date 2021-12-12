/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBoard = /* GraphQL */ `
  mutation CreateBoard(
    $input: CreateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    createBoard(input: $input, condition: $condition) {
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
export const updateBoard = /* GraphQL */ `
  mutation UpdateBoard(
    $input: UpdateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    updateBoard(input: $input, condition: $condition) {
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
export const deleteBoard = /* GraphQL */ `
  mutation DeleteBoard(
    $input: DeleteBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    deleteBoard(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
