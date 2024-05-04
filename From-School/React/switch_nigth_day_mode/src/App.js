import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch, Typography } from "@mui/material";
import { WbSunny, Brightness2 } from '@mui/icons-material';

export default function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#131052',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px'}}>
        <h2>Toggle Dark mode</h2>
        /<Switch
          checked={toggleDarkMode}
          onChange={toggleDarkTheme}
          icon={<WbSunny/>} 
          checkedIcon={<Brightness2 />}
        />
        <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
          This is some text
        </Typography>
        <Typography variant="body1">
          This is some text used to check the output of this component. We all know devs like night mode better than day mode. This has been demonstrated earlier today when a dev preferred wearing solar glasses than look at the outburst of white on his computer. And yes, this paragraph is meant as a joke.
        </Typography>
      </div>
    </ThemeProvider>
  );
}


