/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMmEvent = /* GraphQL */ `
  query GetMmEvent($id: ID!) {
    getMmEvent(id: $id) {
      name
      startTime
      endTime
      duration
      schedule {
        name
        mmUser
        scheduleName
        createdAt
        updatedAt
      }
      isOpPlanned
      createdAt
      updatedAt
    }
  }
`;
export const listMmEvents = /* GraphQL */ `
  query ListMmEvents(
    $filter: ModelMmEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMmEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        startTime
        endTime
        duration
        isOpPlanned
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMmSchedule = /* GraphQL */ `
  query GetMmSchedule($id: ID!) {
    getMmSchedule(id: $id) {
      name
      mmUser
      scheduleName
      events {
        name
        startTime
        endTime
        duration
        isOpPlanned
        createdAt
        updatedAt
      }
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
        name
        mmUser
        scheduleName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
