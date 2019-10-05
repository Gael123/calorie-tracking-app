import { createMuiTheme } from  '@material-ui/core/styles';
import { blue,amber } from '@material-ui/core/colors';
const theme = createMuiTheme({
  pallete:{
    primary:blue,
    secondary:amber,
  },
  typography: {  fontfamily: ['system-ui', 'sans-serif'].join(',')},

  shape: { boredrRadius: 10 },
  overides: {
    MuiButton: {
      label: {
        '& > svg': { marginRight: 8},
      },
    },
  },
});
export default theme;
