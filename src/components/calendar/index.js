import {
    Agenda,
    AgendaEntry,
    AgendaList,
    AgendaListProps,
    AgendaProps,
    AgendaSchedule,
    Calendar,
    CalendarContext,
    CalendarContextProviderProps,
    CalendarList,
    CalendarListProps,
    CalendarProps,
    CalendarProvider,
    CalendarUtils,
} from 'react-native-calendars';
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['es'] = {
    monthNames: [
        'Enero' , 
        'Febrero' , 
        'Marzo' , 
        'Abril' , 
        'Mayo' , 
        'Junio' , 
        'Julio' , 
        'Agosto' , 
        'Septiembre' , 
        'Octubre' , 
        'Noviembre' , 
        'Diciembre' 
    ],
    monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Agos','Sep','Oct','Nov','Dic'],
    dayNames: ['Domingo','Lunes','Marte','Miercoles','Jueves','Viernes','Sabado'],
    dayNamesShort: ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'],
    today: "Hoy"
};

LocaleConfig.defaultLocale = 'es';

const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};

const CustomCalendar = () => {
    return (
        //<AgendaList/>
        //<Agenda/>
        //<Calendar/>
        //<CalendarContext/>
        //<CalendarProvider/>
        //<CalendarUtils/>
        //<AgendaEntry/>
        //<AgendaListProps/>
        //<AgendaProps/>
        //<AgendaSchedule/>
        //<CalendarContextProviderProps/>
        //<CalendarListProps/>
        //<CalendarProps/> 
        
        <Calendar
            theme={{
                arrowColor: "#1B1429",
                selectedDayBackgroundColor: "#8B80F9",
                selectedDayTextColor:"#466060",
            }}
            //habilita que pases los meses con el touch
            enableSwipeMonths
            //tipo de seleccionado
            markingType="multi-dot"
            //marcados predeteminados
            markedDates={{
                '2022-09-04': {dots: [vacation, massage, workout]},
                '2022-09-26': {dots: [massage, workout]},

                '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
                '2012-05-17': {marked: true},
                '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                '2012-05-19': {disabled: true, disableTouchEvent: true}
            }}
            //que hace cuando selecciona el dia
            onDayPress={(e) => {
                //hacer que el dia seleccionado tenga color
                //mostrar lista de  turnos hoy
                console.log(`e`, e)
            }}
        />   
    )
}

export default CustomCalendar;