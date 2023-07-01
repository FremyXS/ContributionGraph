export const convertDate = (date: Date): string => {
    return `${WeekDaysEnum[date.getDay()]}, ${MonthesEnum[date.getMonth()+1]} ${date.getDate()}, ${date.getFullYear()}`
}

export enum MonthesEnum {
    "Янв." = 1,
    "Февр.",
    "Март",
    "Апр.",
    "Май",
    "Июнь",
    "Июль",
    "Авг.",
    "Сент.",
    "Окт.",
    "Нояб.",
    "Дек.",
}
export enum WeekDaysEnum {
    'Пн' = 1,
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Суб',
    'Вос',
}