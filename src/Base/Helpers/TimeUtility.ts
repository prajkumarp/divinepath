import i18next from "i18next"



export default function TimeUtility() { }
/**
 * Return a timer for video from< time in seconds
 * ~~ is used as faster substitute for Math.floor() function
 * https://stackoverflow.com/questions/5971645/what-is-the-double-tilde-operator-in-javascript
 * @param time
 * @returns {string}
 */
TimeUtility.secondToTime = (time: number): string => {
    return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (Math.floor(time) % 60)
}

TimeUtility.secondsToText = (second: number, options: TimeOptions = {}): string => {

    let hours = Math.floor(second / 3600)
    let minutes = Math.floor((second - hours * 3600) / 60)
    let seconds = Math.round(second - hours * 3600 - minutes * 60)

    let hourText =
        hours > 0
            ? hours +
            ' ' +
            i18next.t(options.unitsAbbreviated ? 'time.shortHour' : 'time.hour', {
                count: hours,
            }) +
            ' '
            : ''

    let minuteText =
        minutes > 0
            ? minutes +
            ' ' +
            i18next.t(options.unitsAbbreviated ? 'time.shortMin' : 'time.minute', {
                count: minutes,
            }) +
            ' '
            : ''
    let secondText =
        (options.printWithSeconds && seconds > 0) || (minutes == 0 && hours == 0)
            ? seconds +
            ' ' +
            i18next.t(options.unitsAbbreviated ? 'time.shortSec' : 'time.second', {
                count: seconds,
            })
            : ''
    return hourText + minuteText + secondText
}


export interface TimeOptions {
    printWithSeconds?: boolean
    unitsAbbreviated?: boolean
}