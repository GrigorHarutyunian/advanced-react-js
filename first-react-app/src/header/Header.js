import "./Header.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
export function Header({ gettingNewData }) {
  const [date, setDate] = useState(null);
  const [inputValue, setInputValue] = useState("");

  return (
    <header className="headerSmall">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          if (date && date !== "Invalid Date" && inputValue !== "") {
            gettingNewData({ text: inputValue, date: date });
          }
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2px",
          marginTop: "11px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateTimePicker"]}>
            <DateTimePicker
              onChange={(e) => setDate(e?.$d.toLocaleString())}
              label="Date"
            />
          </DemoContainer>
        </LocalizationProvider>
        <TextField
          autoComplete="off"
          onChange={(evt) => setInputValue(evt.target.value)}
          id="outlined-basic"
          label="Todo"
          variant="outlined"
        />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </header>
  );
}
