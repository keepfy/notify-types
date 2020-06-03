import * as t from 'io-ts'
import DateFromString from './util'

export const NotifyEvent = t.type({
    code: t.string,
    branchId: t.string,
    organizationId: t.string,
    userId: t.string,
    id: t.string
})

// TODO type `status` accordingly to NotificationStatus
export const NotifyMessage = t.type({
    status: t.string,
    updatedAt: DateFromString
})
