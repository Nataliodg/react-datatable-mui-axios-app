import MUIDataTable from "mui-datatables";
import axios from 'axios';
import {useState, useEffect} from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles'

import React from 'react'
const darkTheme = createTheme({
    palette:{
      mode:'dark'
    }
  })

export default function TableAxios() {
    //1 - We configure the Hooks (Configuramos los hooks)
const [products, setProducts] = useState([])

    //2 - functions to display the data (Funciones para mostrar los datos)
const endpoint = `https://fakestoreapi.com/products`;

const getData = async () => {
    await axios.get(endpoint).then((response) => {
        const data = response.data
        console.log(data)
        setProducts(data)
    })
}
useEffect(() => {
    getData();
}, [])

    //3 - We define the columns (Definimos las columnas)
const columns = [
    {
        name:"id",
        label:"ID"
    },
    {
        name:"title",
        label:"TITLE"
    },
    {
        name:"category",
        label:"CATEGORY"
    },
    {
        name:"price",
        label:"PRICE"
    },
]

    //4 - We render the datatable (Renderizamos la datatable)
  return (
    <ThemeProvider theme={darkTheme}>
        <MUIDataTable
        title={"Show data with Axios"}
        data={products}
        columns={columns}
        />
    </ThemeProvider>
  )
}
