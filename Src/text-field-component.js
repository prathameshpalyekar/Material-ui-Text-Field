import React from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default class AdvancedTextField extends React.Component {
  render() {
    return (
    	<MuiThemeProvider muiTheme={getMuiTheme()}>
        <div> 
          <TextField name="textField" value="prathamesh"  underlineFocusStyle={{borderColor: "blue"}} style={{ marginLeft: 19, width: 40}}/>
        </div>
      </MuiThemeProvider>
    )
  }
}