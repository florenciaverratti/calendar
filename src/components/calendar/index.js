import { Calendar, CalendarList } from 'react-native-calendars';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react'

const {height, width} = Dimensions.get('window');
const CustomCalendar = () => {
    return (
        <>
        <Calendar style={styles.calendar}/>
        </>
    
    )
}
export const styles = StyleSheet.create({
    calendar:{
        height: height * 0.1,
    }
});
export default CustomCalendar;