import React from "react";
import { useSelector } from "react-redux";
import SingleDestination from "./SingleDestination";

const DisplayDestination = () => {
  //Extract State from root reducer
  const collectedTicket = useSelector(state => state.ticketDetails);
  console.log(collectedTicket);

  return (
    <>
      {collectedTicket.length > 0 ? (
        <div className='table-container'>
          <table className='booking-table'>
            <thead className='bg-gray-100/50'>
              <tr className='text-black text-left'>
                <th>Destination From</th>
                <th>Destination To</th>
                <th className='text-center'>Journey Date</th>
                <th className='text-center'>Guests</th>
                <th className='text-center'>className</th>
                <th className='text-center'>Delete</th>
              </tr>
            </thead>
            <tbody
              className='divide-y divide-gray-300/20'
              id='lws-previewBooked'>
              {collectedTicket.map(ticket => (
                <SingleDestination ticket={ticket} key={ticket.id} />
              ))}
            </tbody>
          </table>

          {collectedTicket.length >= 3 && (
            <h1
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "#FFF",
              }}>
              You cant buy more than 3 tickets at this moment
            </h1>
          )}
        </div>
      ) : null}
    </>
  );
};

export default DisplayDestination;
