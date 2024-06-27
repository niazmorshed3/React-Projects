import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/ContextProvider";
import BookingTable from "./BookingTable";
// import axios from "axios";
import UseAxiosSecure from "../../Hook/UseAxiosSecure";
import UseAuth from "../../Auth/UseAuth";


const Bookings = () => {
  // const { user } = useContext(AuthContext);
  const {user} = UseAuth();
  const [bookings, setBookings] = useState([]);
  
  const axiosSecure = UseAxiosSecure();

  const url = `/booking?email=${user?.email}`;

  


  useEffect(()=>{
    axiosSecure.get(url)
    .then(res => setBookings(res.data))
  },[url,axiosSecure])





    // With Axios
    // axios.get(url, { withCredentials: true }).then((res) => {
    //   setBookings(res.data);

  


    // With Fetch----->
    // fetch(url, {credentials:'include'})
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //     console.log(data);
    //   });
 

  const handleDelete = (id) => {
    const proced = confirm("Are you want to delete it?");
    if (proced) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = bookings.filter((i) => i._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if(data.modifiedCount>0){
        //   // Data Updating
        // }
      });
  };

  return (
    <div>
      <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingTable
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
