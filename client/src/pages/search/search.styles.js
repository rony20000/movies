import { FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({palette}) => ({
    content: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "50%",
        gap: "20px",
        margin: "20px auto",
        textAlign: "center"
    },
    textField: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.primary.main
        },
        "& .MuiInputLabel-outlined": {
            color: palette.primary.main
        }
    },
    input: {
        color: palette.primary.main
    },
    select: {
        minWidth: "100px",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.primary.main,
        },
        "& .MuiSelect-outlined.MuiSelect-outlined": {
            color: palette.primary.main,
        },
      
    }, 
    label: {
        color: palette.primary.main,
        "&.Mui-focused": {
            color: palette.primary.main,
        },
    },
    icon: {
        color: palette.primary.main,
    }
}));

export default useStyles
