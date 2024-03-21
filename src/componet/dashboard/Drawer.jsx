import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Divider,
  ListItemText,
  
} from "@mui/material";

export const DrawerComponet = () => {
  const drawerWidth = 240;
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
        <Toolbar>Logo</Toolbar>

        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
