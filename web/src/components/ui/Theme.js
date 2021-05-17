import { createMuiTheme } from '@material-ui/core/styles';

const Blue = "#A3BDD4"
const Orange = "#FFBA60"
const Black = "#000000"

export default createMuiTheme({
    palette:{
        common:{
            blue: `${Blue}`,
            red: `${Orange}`,
            black: `${Black}`
        },
        primary: {
            main: `${Blue}`
        },
        secondary:{
            main: `${Orange}`
        }
    },
    typography:{
        h3:{
            fontWeight:100            
        }
    }
});