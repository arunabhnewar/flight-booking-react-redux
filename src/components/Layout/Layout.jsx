import React from "react";
import BookingTicket from "../BookingTicket/BookingTicket";
import DisplayDestination from "../DisplayDestination/DisplayDestination";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <BookingTicket />
      <DisplayDestination />
    </>
  );
};

export default Layout;
