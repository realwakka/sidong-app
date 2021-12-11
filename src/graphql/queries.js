/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      type
      createdAt
      updatedAt
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
        type
        createdAt
        updatedAt
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
        type
        createdAt
        updatedAt
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
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const postByTypeAndCreated = /* GraphQL */ `
  query PostByTypeAndCreated(
    $type: String
    $created: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postByTypeAndCreated(
      type: $type
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
        type
        createdAt
        updatedAt
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
