import { Button, InputBase, alpha, styled } from "@mui/material";

export const SeachIconContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});
export const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    width: "100%",
    border: "1px solid ",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "700px",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));
export const ButtonContainer = styled(Button)({
    display: "flex",
    gap: "10px",
    textTransform: "none",
});

export const ButtonWrapper = styled("div")({
    display: "flex",
    gap: "30px",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: "20px",
});

export const PElement = styled("p")({
    marginRight:'20px'
});

export const ProjectContainer = styled('div')({
    border: "1px solid",
    height: "250px",
    width: "250px"
});
export const DivContainer = styled("div")({
    display: "flex",
    gap: "20px"
    // alignItems: "center",
    // justifyContent: "space-between",
});