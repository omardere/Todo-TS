import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Check, Delete } from "@mui/icons-material";
import { todoProps } from "../types/componentTypes";

const Todo: React.FunctionComponent<todoProps> = ({ title, assginedTo, onCheck, id, isComplete, onDelete }) => {
    const deletetodo = () => onDelete(id);
    const checkStyle = isComplete ? { color: "green" } : { color: "gray" };
    const markChecked = () => onCheck(id, !isComplete);
    return (
        <Container sx={{ marginTop: "48px" }}>
            <Card variant="outlined">
                <CardContent component="h2">
                    <Typography variant="body1">
                        {title} Assigned To {assginedTo}
                    </Typography>
                    <IconButton sx={{ float: "right" }} onClick={markChecked}>
                        <Check sx={checkStyle} />
                    </IconButton>
                    <IconButton onClick={deletetodo} sx={{ float: "right" }}>
                        <Delete sx={{ color: "red" }} />
                    </IconButton>
                </CardContent>
            </Card>
        </Container>
    );
};
export default Todo;
