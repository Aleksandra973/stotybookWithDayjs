import React from "react";
import dayjs from "dayjs";
import weekday from 'dayjs/plugin/weekday';
dayjs.extend(weekday);
import 'dayjs/locale/ru';
dayjs.locale('ru');


export interface ButtonProps{
    label: string;

}

export const Button = ( {label}: ButtonProps) => {
    return (<div>
        {dayjs().format('DD MMMM YYYY')}
    {dayjs().weekday()}
    <button>{label}</button>
    </div>)
}

