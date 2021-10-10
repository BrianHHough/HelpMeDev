import { Alert, AlertTitle } from "@mui/material"

export const ErrorBox = ({title, message}) => {
    return (
        <Alert severity="error">
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    )
}