import React,{useState,useEffect} from "react";
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";
import axios from 'axios';
import { Link } from "react-router-dom";

// display the touter data here 
const columns = [
  { field: '_id', headerName: 'ID' },
  { field: 'username', headerName: 'Name', width: 150 },
  { field:'email', headerName: 'Email', width: 150 },
  { field: 'profile_status', headerName: 'Profile Status', width: 200 },
  { field: 'cnic', headerName: 'Cnic', width: 150 },
  { field: 'gender', headerName: 'gender', width: 150 },
  {
    field: "action",
    headerName: "Action",
    width: 190,
    renderCell: (params) => {
      return (
        <>
          <Link 
          // to={"/product/" + params.row.id}
          >
            <button style={{width:70}} className="productListEdit">Edit</button>
          </Link>
          <Link 
          // to={"/product/" + params.row.id}
          >
            <button style={{width:70,justifyContent:"space-between"}}  className="productListDelete" >Delete</button>
          </Link>
        </>
      );
    },
  },
  
]



function ProductList() {
  const [tableData, setTableData] = useState([])

    useEffect(() => {
    fetch("http://localhost:8800/api/userAuth/find_tutor")
      .then((data) => data.json())
      .then((data) => setTableData(data))
  }, [])
   console.log(tableData)



  // //  we have to fetch student 

  // const fetchData = () => {
  //   // pu a link here to fetch all the studenet data 
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       setData(data)
  //     })
  // }

  // const [data, setData] = useState(userRows);

  // useEffect(() => {
  //   fetchData()
  // }, [])

  // // const [users, setUsers] = useState([])


  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  // const columns = [
  //   { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "user",
  //     headerName: "User",
  //     width: 200,
  //     renderCell: (data) => {

       
  //       return (
  //         <div className="userListUser">
  //         {
  //           data.map((item) => ( 
  //             <>
  //             <img className="userListImg" alt="" />  {item.name}
  //             </>
              
  //           ))
           
  //          } </div>
            
         
        
  //       );
  //     },
  //   },
  //   { field: "email", headerName: "Email", width: 200 },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     width: 120,
  //   },
  //   // {
  //   //   field: "transaction",
  //   //   headerName: "Transaction Volume",
  //   //   width: 160,
  //   // },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={"/user/" + params.row.id}>
  //             <button className="userListEdit">Edit</button>
  //           </Link>
  //           {/* <DeleteOutline
  //             className="userListDelete"
  //             onClick={() => handleDelete(row.id)}
  //           /> */}
  //         </>
  //       );
  //     },
  //   },
  // ];

  return (
    
   
    <div className="userList">
      {/* <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      /> */}
      
      <Table stickyHeader>
        <TableHead >
          <TableRow>
            <TableCell style={{ fontSize:18}} >Touter</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      
      <DataGrid
        getRowId={(row) => row._id}
        rows={tableData}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

  
export default ProductList;
