import { Alert, Snackbar } from "@mui/material";

function SnackBar({isOpen, handleClose}) {

    return <Snackbar autoHideDuration={2000} open={isOpen} onClose={handleClose}>
        <Alert severity="success">
            Contact added in your list
        </Alert>
    </Snackbar>

}

export default SnackBar;