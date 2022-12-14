import { Container, TextField } from "@mui/material";
import React from "react";
import { searchProps } from "../types/componentTypes";

const Search: React.FC<searchProps> = ({ onChange }) => {
  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onChange(event);
  };
  return (
    <Container maxWidth="sm" sx={{ marginTop: "24px" }}>
      <TextField
        onChange={onSearch}
        fullWidth={true}
        label="search by task or assign"
      />
    </Container>
  );
};

export default Search;
