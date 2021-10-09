import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    loginPage: {
        paddingTop: "100px",
        textAlign: "center"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "50%",
        margin: "0 auto"
    },
    textField: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "& .MuiInputLabel-outlined": {
            color: "#fff"
        }
    },
    input: {
        color:'#fff'
    }
}));

export default useStyles
