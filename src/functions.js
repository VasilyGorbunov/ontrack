import {
    HOURS_IN_DAY,
    MIDNIGHT_HOUR, MILLISECONDS_IN_SECOND,
    MINUTES_IN_HOUR,
    PAGE_TIMELINE,
    SECONDS_IN_HOUR,
    SECONDS_IN_MINUTE
} from "@/constants.js";
import {isNull, isPageValid} from "@/validators.js";


export function normalizePageHash() {
    const page = window.location.hash.slice(1)
    if (isPageValid(page)) {
        return page
    }
    window.location.hash = PAGE_TIMELINE
    return PAGE_TIMELINE
}


export function id() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function generateActivities() {

    return ['Coding', 'Training', 'Reading'].map((name, hours) => ({
        id: id(),
        name,
        secondsToComplete: hours * SECONDS_IN_HOUR
    }))
}

export function generateTimelineItems() {
    const timelineItems = []
    for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
        timelineItems.push({
            hour,
            activityId: null,
            activitySeconds: 0
        })
    }
    return timelineItems
}

export function generateActivitySelectOptions(activities) {
    return activities.map(activity => ({label: activity.name, value: activity.id}));
}

export function normalizeSelectValue(value) {
    return isNull(value) || isNaN(value) ? value : +value
}

export function generatePeriodSelectOptions(periodsInMinutes) {
    return periodsInMinutes.map(periodInMinutes => ({
            value: periodInMinutes * SECONDS_IN_MINUTE,
            label: generatePeriodSelectOptionsLabel(periodInMinutes)
        }))
}

function generatePeriodSelectOptionsLabel(periodInMinutes) {
    const hours = Math.floor(periodInMinutes / MINUTES_IN_HOUR).toString().padStart(2, 0)
    const minutes = (periodInMinutes %  MINUTES_IN_HOUR).toString().padStart(2, 0)

    return `${hours}:${minutes}`
}

export function formatSeconds(seconds) {
    const date = new Date()
    date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND)

    const utc = date.toUTCString()

    return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)

}



