import { Grid, MenuItem } from "@mui/material";
import { EditPageDrawer } from "./EditPageDrawer";
import { TextFieldWrapper } from "./EditorPage.styled";

export const Editorpage = () => {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "Original",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2.5} md={2.5}>
          <EditPageDrawer />
        </Grid>

        <Grid item xs={4} md={4} sx={{ border: "1px solid" }}>
          <h1>Project Setting</h1>
          <TextFieldWrapper
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextFieldWrapper>
        </Grid>
      </Grid>
    </div>
  );
};
