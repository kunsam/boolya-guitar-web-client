import gql from 'graphql-tag'

export const QueryScore = gql`
  query queryScore($id: ID!) {
    score(id: $id) {
      id
      level
      title
      likeCount
      description
      images{
        id
        url
        checkSum
      }
    }
  }
`

// TODO 只查询缩略图
export const QueryScores = gql`
  {
    scores {
      id
      level
      title
      likeCount
      description
      images{
        id
        url
        checkSum
      }
    }
  }
`


