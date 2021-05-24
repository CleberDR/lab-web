import React, {useState} from 'react'; 
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from "./ui/Header";
import theme from "./ui/Theme";
import Login from "./Login";
import FormsInfo from "./FormsInfo";
import Forms from "./Forms";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0); 
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header 
        value={value}
        setValue={setValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        />          
        <Switch>
          <Route 
          exact path= "/"
          render={props => (
            <Login{...props} setValue={setValue}
            setSelectedIndex={setSelectedIndex}/>)} 
          />
          <Route 
          exact path= "/formsinfo"
          render={props => (
            <FormsInfo{...props} setValue={setValue}
            setSelectedIndex={setSelectedIndex}/>)} 
          />
          <Route 
          exact path= "/forms"
          render={props => (
            <Forms{...props} setValue={setValue}
            setSelectedIndex={setSelectedIndex}/>)} 
          />
        </Switch>
      </BrowserRouter>                 
    </ThemeProvider>
  );
}
export default App;