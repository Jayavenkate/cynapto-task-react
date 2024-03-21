import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from '@mui/icons-material/Add';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import TitleIcon from '@mui/icons-material/Title';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MenuIcon from '@mui/icons-material/Menu';
export const EditPageDrawer = () => {
    const drawerWidth = 100;
    const icons = [
        {
            id: 0,
            icons: <SettingsIcon />,
            iconstext: "Setting",
        },
        {
            id: 1,
            icons: <AddIcon />,
            iconstext: "Media",
        },
        {
            id: 2,
            icons: <MusicNoteIcon />,
            iconstext: "Audio",
        },
        {
            id: 3,
            icons: <SubtitlesIcon />,
            iconstext: "SubTitles",
        },
        {
            id: 4,
            icons: <TitleIcon />,
            iconstext: "Text",
        },
        {
            id: 5,
            icons: <ViewTimelineIcon />,
            iconstext: "Elements",
        },
        {
            id: 6,
            icons: <FeaturedPlayListIcon />,
            iconstext: "Templates",
        },
    ];
    return (
        <Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar> <MenuIcon /></Toolbar>

                <Divider />
                <List>
                    {icons.map((text) => (
                        <ListItem key={text.id} disablePadding>
                            <ListItemButton
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <ListItemIcon>{text.icons}</ListItemIcon>
                                <ListItemText primary={text.iconstext} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};
