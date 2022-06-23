import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "../reducers/AddFormData";

export default function NavBar() {
  const isForm = window.location.pathname !== "/list";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {!isForm ? (
            <>
              <Button color="inherit" onClick={() => navigate(`/`)}>
                Form
              </Button>
              <Button color="inherit" onClick={() => dispatch(reset())}>
                Clear List
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => navigate("/list")}>
              List Page
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
