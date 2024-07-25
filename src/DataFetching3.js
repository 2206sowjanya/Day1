import axios from "axios";
import { useEffect, useState } from "react";

function DataFetching3() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMyData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(res);
      console.log(res.data);
      const resData = await res.data;
      setData(resData);
   
    };

    fetchMyData();
  }, []);

  return (
    <div>
      <div>Fetching Data</div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Phone</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dataItem, index) => (
            <tr key={index}>
              <td>{dataItem.id}</td>
              <td>{dataItem.Username}</td>
              <td>{dataItem.Phone}</td>
              <td>{dataItem.name.Firstname}</td>
              <td>{dataItem.name.Lastname}</td>
              <td>{dataItem.Email}</td>
              <td>{dataItem.City}</td>
              <td>{dataItem.Zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataFetching3;

