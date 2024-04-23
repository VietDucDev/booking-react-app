import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function DateRangePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]} sx={{ paddingTop: 0 }}>
        <DateTimePicker label="Nhận phòng" />
      </DemoContainer>
      <DemoContainer components={["DateTimePicker"]} sx={{ paddingTop: 0 }}>
        <DateTimePicker label="Trả phòng" />
      </DemoContainer>
    </LocalizationProvider>
  );
}
