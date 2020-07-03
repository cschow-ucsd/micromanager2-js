/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMmEvent = /* GraphQL */ `
  subscription OnCreateMmEvent {
    onCreateMmEvent {
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
export const onUpdateMmEvent = /* GraphQL */ `
  subscription OnUpdateMmEvent {
    onUpdateMmEvent {
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
export const onDeleteMmEvent = /* GraphQL */ `
  subscription OnDeleteMmEvent {
    onDeleteMmEvent {
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
export const onCreateMmSchedule = /* GraphQL */ `
  subscription OnCreateMmSchedule {
    onCreateMmSchedule {
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
export const onUpdateMmSchedule = /* GraphQL */ `
  subscription OnUpdateMmSchedule {
    onUpdateMmSchedule {
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
export const onDeleteMmSchedule = /* GraphQL */ `
  subscription OnDeleteMmSchedule {
    onDeleteMmSchedule {
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
