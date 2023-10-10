import moment from "moment";
import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MonthPicker from "react-native-month-picker";

const YearMonthPicker = ({ dateSelected, setDateSelected }) => {
  return (
    <View>
      <MonthPicker
        selectedDate={dateSelected}
        onMonthChange={setDateSelected}
        onYearChange={(newDate) => setDateSelected(newDate)}
        maxDate={moment()}
        minDate={moment("01-01-1995", "DD-MM-YYYY")}
        currentMonthTextStyle={{ color: "#0aa9c2" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
});
export default YearMonthPicker;
