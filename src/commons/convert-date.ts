import { MonthesEnum, WeekDaysEnum } from "../types/enum"

export const convertDate = (date: Date): string => {
    return `${WeekDaysEnum[date.getDay()]}, ${MonthesEnum[date.getMonth()+1]} ${date.getDate()}, ${date.getFullYear()}`
}