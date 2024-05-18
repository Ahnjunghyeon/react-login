import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { WithFirebaseApiProps, withFirebaseApi } from "../Firebase";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const HeaderBase = (props: WithFirebaseApiProps) => {
  const currentUserId = useAppSelector((state: RootState) => state.user.userId);

  const loginWithGoogleButton = (
    <Button
      color="inherit"
      onClick={props.firebaseApi.signInWithGoogleRedirect}
    >
      구글 로그인
    </Button>
  );
  const logoutButton = (
    <Button color="inherit" onClick={props.firebaseApi.signOut}>
      Log out
    </Button>
  );
  const button = currentUserId == null ? loginWithGoogleButton : logoutButton;

  return (
    <AppBar position="static">
      <Toolbar sx={{ width: "100%", maxWidth: 720, margin: "auto" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Log In App
        </Typography>
        {button}
      </Toolbar>
    </AppBar>
  );
};

export default withFirebaseApi(HeaderBase);
