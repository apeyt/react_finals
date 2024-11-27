import { createTheme } from '@mui/material'
import Roster from '../pages/Roster'

const themeOptions = createTheme({
    palette:{
        primary:{
            main: "#abadf8"
        },
        success:{
            main: "#235c2c"
        },
        secondary:{
            main: "#808080"
        },
        error:{
            main: "#8b0000"
        }
    },
    typography:{
        fontFamily: 'Montserrat, sans-serif',
    }
})

export default themeOptions