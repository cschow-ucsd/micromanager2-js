/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMmEvent = /* GraphQL */ `
  mutation CreateMmEvent(
    $input: CreateMmEventInput!
    $condition: ModelMmEventConditionInput
  ) {
    createMmEvent(input: $input, condition: $condition) {
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
export const updateMmEvent = /* GraphQL */ `
  mutation UpdateMmEvent(
    $input: UpdateMmEventInput!
    $condition: ModelMmEventConditionInput
  ) {
    updateMmEvent(input: $input, condition: $condition) {
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
export const deleteMmEvent = /* GraphQL */ `
  mutation DeleteMmEvent(
    $input: DeleteMmEventInput!
    $condition: ModelMmEventConditionInput
  ) {
    deleteMmEvent(input: $input, condition: $condition) {
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
export const createMmSchedule = /* GraphQL */ `
  mutation CreateMmSchedule(
    $input: CreateMmScheduleInput!
    $condition: ModelMmScheduleConditionInput
  ) {
    createMmSchedule(input: $input, condition: $condition) {
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
export const updateMmSchedule = /* GraphQL */ `
  mutation UpdateMmSchedule(
    $input: UpdateMmScheduleInput!
    $condition: ModelMmScheduleConditionInput
  ) {
    updateMmSchedule(input: $input, condition: $condition) {
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
export const deleteMmSchedule = /* GraphQL */ `
  mutation DeleteMmSchedule(
    $input: DeleteMmScheduleInput!
    $condition: ModelMmScheduleConditionInput
  ) {
    deleteMmSchedule(input: $input, condition: $condition) {
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
