import { Typography, TextField, IconButton } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import StarsIcon from "@mui/icons-material/Stars";
import { useEffect, useState } from "react";

interface FieldProps {
  label: string;
  name: string;
  value: string;
  isEditable: boolean;
  onChange: (name: string, value: any) => void;
  type?: "text" | "date" | "textarea";
  enableFavorite?: boolean;
  isFavorite?: boolean;
  error?: boolean;
  helperText?: string;
}

const Field: React.FC<FieldProps> = ({
  label,
  name,
  value = "",
  isEditable,
  onChange,
  type = "text",
  enableFavorite = false,
  isFavorite = false,
  error = false,
  helperText = "",
}) => {
  const [favoriteValue, setFavoriteValue] = useState(isFavorite);
  const [dateValue, setDateValue] = useState<string>(value);
  useEffect(() => {
    setFavoriteValue(isFavorite);
  }, [isFavorite]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-2">
      <div className="sm:col-span-3 flex items-center">
        <Typography variant="subtitle2">{label}</Typography>
      </div>
      <div
        className={enableFavorite ? "sm:col-span-7" : "sm:col-span-9"}
      >
        {isEditable ? (
          type === "date" ? (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={dateValue ? dayjs(dateValue) : null} 
                onChange={(date) => {
                  const formattedDate = date ? dayjs(date).format("YYYY-MM-DD") : "";
                  onChange(name, formattedDate);
                  setDateValue(formattedDate); 
                }}
                slotProps={{
                  textField: { fullWidth: true, error, helperText },
                }}
              />
            </LocalizationProvider>
          
          ) : (
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              disabled={name === "id"}
              defaultValue={value || ""}
              onChange={(e) => onChange(name, e.target.value)}
              multiline={type === "textarea"}
              rows={type === "textarea" ? 5 : 1}
              error={error}
              helperText={helperText}
            />
          )
        ) : (
          <Typography variant="body1">
            {type === "date" ? dayjs(value).format("YYYY-MM-DD") : value}
          </Typography>
        )}
      </div>
      {enableFavorite && (
        <div className="sm:col-span-2 flex justify-end">
          <IconButton
            sx={{
              color: favoriteValue ? "#e91e63" : "inherit",
            }}
            onClick={() => {
                onChange('isFavorite', !favoriteValue);
                setFavoriteValue(!favoriteValue);
            }}
          >
            <StarsIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Field;
