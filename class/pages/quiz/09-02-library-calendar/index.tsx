import { DatePicker, Space } from "antd";

export default function LibraryCalendarPage() {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <>
      <DatePicker />
      <DatePicker onChange={onChange} picker="month" />
      <Space />
    </>
  );
}
