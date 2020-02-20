import * as t from 'io-ts'
import DateFromString from './util'

export enum Queue {
    events = 'notify-events',
    notifications = 'notify-notifications'
}

export enum EventCode {
    serviceRequestOpening = 'SERVICE_REQUEST_OPENING',
    serviceRequestDistribution = 'SERVICE_REQUEST_DISTRIBUTION',
    serviceRequestCancelation = 'SERVICE_REQUEST_CANCELATION',
    serviceOrderOpening = 'SERVICE_ORDER_OPENING',
    serviceOrderClosening = 'SERVICE_ORDER_CLOSENING',
    serviceOrderAssignment = 'SERVICE_ORDER_ASSIGNMENT',
    serviceOrderEmployeeHoursUpdated = 'SERVICE_ORDER_EMPLOYEE_HOURS_UPDATE',
    equipmentWarrantyDue = 'EQUIPMENT_WARRANTY_DUE'
}

export enum NotificationStatus {
    clicked = 'CLICKED',
    viewed = 'VIEWED'
}

export type NotifyMessageType = {
    status: NotificationStatus
    updatedAt: Date
}

export const NotifyEvent = t.type({
    code: t.string,
    branchId: t.string,
    userId: t.string,
    id: t.string
})

// TODO type `status` accordingly to NotificationStatus
export const NotifyMessage = t.type({
    status: t.string,
    updatedAt: DateFromString
})

export type NotifyEventType = t.TypeOf<typeof NotifyEvent>
