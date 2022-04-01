/* eslint-disable react/jsx-no-comment-textnodes */
import React,{useEffect,useState} from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import ReactRoundedImage from "react-rounded-image";
import SearchBar from "material-ui-search-bar";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";
import { Link } from "react-router-dom";
//  diplay student data here

// _id": "6229e26f273e83cedb41bbaf",
//         "username": "Saleem Chaudhary",
//         "email": "std@gmail.com",
//         "profile_status": "Student",
//         "cnic": "1234",
//         "gender": "male",
//         "img": "https://firebasestorage.googleapis.com/v0/b/hometutorclub.appspot.com/o/ProfileImages%2F816694?alt=media&token=4e99b47b-df23-4bae-8716-e416d305fc80"


const  columns = [
  { field: '_id', headerName: 'ID' },
  { field: 'username', headerName: 'Name', width:150 },
  { field: 'email', headerName: 'Email', width:150 },
  { field: 'profile_status', headerName: 'profile_status', width:200 },
  { field: 'cnic', headerName: 'Cnic', width:150 },
  { field: 'gender', headerName: 'gender', width:150 },
  { field: 'img',headerName:"profileImage", width:150 ,

  renderCell: (params) => {
   
    return (
      <>
      
      <Table stickyHeader>
        <TableHead >
          <TableRow>
            <TableCell style={{ fontSize:18}} >Touter</TableCell>
          </TableRow>
        </TableHead>
      </Table>
       <ReactRoundedImage image={params.row.img} 
         roundedColor="#66A5CC"
          imageWidth="30"
          imageHeight="30"
          roundedSize="8"
          borderRadius="15"
       />
        
        
      </>
    );
  },
},





]







  // {
    // field: "action",
    // headerName: "Action",
    // width: 190,
    // renderCell: (params) => {
      // return (
        // <>
          // <Link 
          // to={"/product/" + params.row.id}
          // >
            // <button style={{width:70}} className="productListEdit">Edit</button>
          // </Link>
          // <Link 
          // to={"/product/" + params.row.id}
          // >
            // <button style={{width:70,justifyContent:"space-between"}}  className="productListDelete" >Delete</button>
          // </Link>
        // </>
      // );
    // },
  // },
function UserList() {
 
  const [tableData, setTableData] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:8800/api/userAuth/find_student")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

 



 

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
        <TableHead>
          <TableRow>
            <TableCell style={{fontSize:18}} >Student</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <SearchBar
          value="search"
          // onChange={(searchVal) => requestSearch(searchVal)}
          // onCancelSearch={() => cancelSearch()}
          style={{marginBottom:10}}
        />
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

export default UserList;
