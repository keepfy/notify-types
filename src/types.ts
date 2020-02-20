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

export type NotifyEventType = {
    id: string
    code: string
    branchId: string
    userId: string
}
