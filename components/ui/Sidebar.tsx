import { Drawer, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const menuItems: string[] = ['Inbox', 'Started', 'Send Email', 'Drafts', 'Trash'];

export const Sidebar = () => {
    return (
        <Drawer
            anchor="left"
            open={true}
            onClose={() => console.log('cerrando')}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>

                    <Typography variant="h4">Menu</Typography>

                </Box>
                <List>
                    {
                        menuItems.map((item, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    {
                                        index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />
                                    }
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))
                    }
                </List>

                <Divider />
                <List>
                    {
                        menuItems.map((item, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    {
                                        index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />
                                    }
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>


        </Drawer>
    )
}
