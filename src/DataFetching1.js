// import axios from "axios";
import { useEffect, useState } from "react";

function FetchingUsersData(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        const fetchMyData = async () =>{
           const res = await fetch('https://fakestoreapi.com/users');
           console.log(res.ok);
           const resData = await res.json();
           setData(resData)
           console.log(resData);
        }
        fetchMyData();
    })
    return(
        <div>
            <h2>Fetching Data</h2>
            <table className="table table-striped">
                    <thead>
                        <th scope="col"> Email</th>
                        <th scope="col"> UserName</th>
                        <th scope="col"> password</th>
                        <th scope="col"> FirstName</th>
                        <th scope="col"> LastName</th>
                        <th scope="col"> City</th>
                        <th scope="col"> Street</th>
                        <th scope="col"> Zipcode</th>
                        <th scope="col"> Phone</th>
                        <th scope="col"> Latitude</th>
                        <th scope="col"> Longitude</th>
                    </thead>
                    <tbody>
                    {data.map((dataItem,index)=> 
                    <tr key={index}>
                        <td>{dataItem.email}</td>
                        <td>{dataItem.username}</td>
                        <td>{dataItem.password}</td>
                        <td>{dataItem.name.firstname}</td>
                        <td>{dataItem.name.lastname}</td>
                        <td>{dataItem.address.city}</td>
                        <td>{dataItem.address.street}</td>
                        <td>{dataItem.address.zipcode}</td>
                        <td>{dataItem.address.geolocation.lat}</td>
                        <td>{dataItem.address.geolocation.long}</td>
                        <td>{dataItem.phone}</td>
                    </tr>
                    )}
                    </tbody>
                </table>
                
            </div>)
            }
export default FetchingUsersData;