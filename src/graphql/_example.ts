import gql from 'graphql-tag'

export const queryAbout = gql`
  query queryAbout($class_id: ID!) {
    clazz(id: $class_id) {
      subjects{
        id
        name
        doneCount
        todoCount
        description
        createdAt
        creator{
          id
          name
        }
        activities{
          id,
          content
          created_at,
          happened_at,
          teacher{
            name
          }
          title
          collectedStudents: students(status: COLLECTED) {
            id
          }
        }
      }
    }
  }
`

export const GQ_deleteSubject = gql`
  mutation deleteSubject($subjectId: ID!) {
    deleteSubject(input: {
      subjectId: $subjectId
    }) {
      deletedSubject{
        id
        name
      }
    }
  }
`

