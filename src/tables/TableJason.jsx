import MUIDataTable from "mui-datatables";
import users from './users.json';
import React from 'react'


const columns = [
    {
        name: "id",
        label: "ID",
    },
    {
        name: "name",
        label: "NAME",
    },
    {
        name: "gender",
        label: "GENDER",
    },
    {
        name: "email",
        label: "EMAIL",
    }
];


export default function TableJason() {
  return (
    <MUIDataTable
    title={"List of employees"}
    data={users}
    columns={columns}
    />
  )
}
