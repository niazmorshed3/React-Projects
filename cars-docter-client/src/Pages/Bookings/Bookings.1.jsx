import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../Hook/UseAxiosSecure";
import { AuthContext } from "../../Provider/ContextProvider";

export const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = UseAxiosSecure;

  // const url = `http://localhost:5000/booking?email=${user?.email}`;
  const url = `/booking?email=${user?.email}`;

  useEffect(() => {
    // axios.get(url,{withCredentials:true}).then((res) => {
    //   setBookings(res.data);
    axiosSecure.get(url);
  });

  // fetch(url, {credentials:'include'})
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setBookings(data);
  //     console.log(data);
  //   });
}, [];
