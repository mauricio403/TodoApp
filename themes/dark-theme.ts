import { createTheme } from "@mui/material";
import { grey } from '@mui/material/colors';
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: '#19874b'
        },
        error: {
            main: red.A400
        },
        
    },
    components:{

    }
});
