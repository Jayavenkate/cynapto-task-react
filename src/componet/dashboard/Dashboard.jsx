import { Grid, IconButton } from "@mui/material";
import { DrawerComponet } from "./Drawer";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  ButtonContainer,
  ButtonWrapper,
  DivContainer,
  PElement,
  ProjectContainer,
  SeachIconContainer,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./Dashboard.styled";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import EmergencyRecordingIcon from "@mui/icons-material/EmergencyRecording";
import { useNavigate } from "react-router-dom";

export const DashBoard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2.5} md={2.5}>
          <DrawerComponet />
        </Grid>
        <Grid item xs={9.5} md={9.5}>
          <SeachIconContainer>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </SeachIconContainer>
          <div>
            <ButtonWrapper>
              <DivContainer>
                <ButtonContainer variant="contained" onClick={()=>navigate("/editorpage")}>
                  <ContentCutIcon /> Create Project
                </ButtonContainer>
                <ButtonContainer variant="contained">
                  <EmergencyRecordingIcon />
                  Record Videos
                </ButtonContainer>
              </DivContainer>
              <PElement>All Videos</PElement>
            </ButtonWrapper>
          </div>
          <PElement>Recent Videos</PElement>
          <DivContainer>
            <div>
              <ProjectContainer></ProjectContainer>
              <p>Project Name 1</p>
            </div>
            <div>
              <ProjectContainer></ProjectContainer>
              <p>Project Name 2</p>
            </div>
            <div>
              <ProjectContainer></ProjectContainer>
              <p>Project Name 3</p>
            </div>
          </DivContainer>
        </Grid>
      </Grid>
    </>
  );
};
