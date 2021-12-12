/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBoard = /* GraphQL */ `
  subscription OnCreateBoard {
    onCreateBoard {
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
export const onUpdateBoard = /* GraphQL */ `
  subscription OnUpdateBoard {
    onUpdateBoard {
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
export const onDeleteBoard = /* GraphQL */ `
  subscription OnDeleteBoard {
    onDeleteBoard {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
