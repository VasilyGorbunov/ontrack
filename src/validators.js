import {
  BUTTON_TYPES,
  HOURS_IN_DAY,
  MIDNIGHT_HOUR,
  NAV_ITEMS,
} from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}

function isSelectOptionValid({ value, label }) {
  return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

export function isUndefinedOrNull(value) {
  return isNull(value) || isUndefined(value)
}

export function isNull(value) {
  return value === null
}

export function isUndefined(value) {
  return value === undefined
}

export function isNumber(value) {
  return typeof value === 'number'
}

function isString(value) {
  return typeof value === 'string'
}

function isBetween(value, start, end) {
  return value => start && value <= end
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function isActivityValid({ id, name, secondsToComplete }) {
  if (isNull(id)) return true

  return [
    isNotEmptyString(id),
    isNotEmptyString(name),
    isNumber(secondsToComplete),
  ].every(Boolean)
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}

export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
}

export function isSelectValueValid(value) {
  return isNotEmptyString(value) || isNumberOrNull(value)
}
