/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMmSchedule = /* GraphQL */ `
  query GetMmSchedule($id: ID!) {
    getMmSchedule(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listMmSchedules = /* GraphQL */ `
  query ListMmSchedules(
    $filter: ModelMmScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMmSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
