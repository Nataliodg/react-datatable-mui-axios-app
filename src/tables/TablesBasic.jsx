import MUIDataTable from "mui-datatables";
import {createTheme, ThemeProvider} from '@mui/material/styles'
import React from 'react'
import { render } from "react-dom";

const darkTheme = createTheme({
  palette:{
    mode:'dark'
  }
})




export default class TablesBasic extends React.Component {
  render() {
    const columns = ["Name", "Company", "City", "State"];
    const data = [
            ["Joe James", "Test Corp", "Yonkers", "NY"],
            ["John Walsh", "Test Corp", "Hartford", "CT"],
            ["Bob Herm", "Test Corp", "Tampa", "FL"],
            ["James Houston", "Test Corp", "Dallas", "TX"],
        ];
    const options = {
        filterType: 'checkbox',
    };

    return(
      <ThemeProvider theme={darkTheme}>
        <MUIDataTable
          title={"List of employees"}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    )
  }
}
