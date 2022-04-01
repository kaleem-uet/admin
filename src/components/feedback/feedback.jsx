import React,{useState,useEffect} from "react";
import "./Feedback.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";

import { Link } from "react-router-dom";
const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'Name', headerName: 'Name', width: 300 },
  { field: 'Email', headerName: 'Email', width: 300 },
  {
    field: "feed back",
    headerName: "feed back",
    width: 190
  },
]
function ProductList() {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  



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
            <TableCell style={{ fontSize:18}} >Feedback</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      
      <DataGrid
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
