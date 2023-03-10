import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import fromImg from "../../assets/icons/Frame.svg";
import guestImg from "../../assets/icons/Vector (1).svg";
import baggageImg from "../../assets/icons/Vector (3).svg";
import { bookingTicketAction } from "../../redux/ticketDetails/ticketActions";

const BookingTicket = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    guest: "",
    classType: "",
    id: "",
  });

  // Use Selector
  //Extract State from root reducer
  const collectedTicket = useSelector(state => state.ticketDetails);

  // Dispatch
  const dispatch = useDispatch();

  // Inputs Values Handle
  const inputValuesHandle = e => {
    let value = e.target.value;

    if (e.target.name === "from") {
      setFormData({ ...formData, from: value });
    } else if (e.target.name === "to") {
      setFormData({ ...formData, to: value });
    } else if (e.target.name === "date") {
      setFormData({ ...formData, date: value });
    } else if (e.target.name === "guests") {
      setFormData({ ...formData, guest: value });
    } else if (e.target.name === "ticketclassName") {
      setFormData({ ...formData, classType: value });
    }
  };

  // OnSubmit Function
  const ticketBookingHandler = e => {
    e.preventDefault();
    dispatch(bookingTicketAction({ ...formData, id: v4() }));
    resetFormData();
  };

  // Reset Form after ticket booked
  function resetFormData() {
    setFormData({
      ...formData,
      from: "",
      to: "",
      date: "",
      guest: "",
      classType: "",
      id: "",
    });
  }

  // Extract data from ticket info state
  const { from, to, date, guest, classType } = formData;

  return (
    <div className='mt-[160px] mx-4 md:mt-[160px] relative'>
      <div className='bg-white rounded-md max-w-6xl w-full mx-auto'>
        <form
          onSubmit={ticketBookingHandler}
          className='first-hero lws-inputform'>
          {/*  From  */}
          <div className='des-from'>
            <p>Destination From</p>
            <div className='flex flex-row'>
              <img src={fromImg} alt='From Icon' />
              <select
                className='outline-none px-2 py-2 w-full'
                name='from'
                id='lws-from'
                value={from}
                onChange={e => inputValuesHandle(e)}
                required>
                <option value='' hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option> Chittagong</option>
                <option>Jashore</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/*  To  */}
          <div className='des-from'>
            <p>Destination To</p>
            <div className='flex flex-row'>
              <img src={fromImg} alt='' />
              <select
                className='outline-none px-2 py-2 w-full'
                name='to'
                id='lws-to'
                value={to}
                onChange={e => inputValuesHandle(e)}
                required>
                <option value='' hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option> Chittagong</option>
                <option>Jashore</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/*  Date  */}
          <div className='des-from'>
            <p>Journey Date</p>
            <input
              type='date'
              className='outline-none px-2 py-2 w-full date'
              name='date'
              id='lws-date'
              value={date}
              onChange={e => inputValuesHandle(e)}
              required
            />
          </div>

          {/*  Guests  */}
          <div className='des-from'>
            <p>Guests</p>
            <div className='flex flex-row'>
              <img src={guestImg} alt='' />
              <select
                className='outline-none px-2 py-2 w-full'
                name='guests'
                id='lws-guests'
                value={guest}
                onChange={e => inputValuesHandle(e)}
                required>
                <option value='' hidden>
                  Please Select
                </option>
                <option value='1'>1 Person</option>
                <option value='2'>2 Persons</option>
                <option value='3'>3 Persons</option>
                <option value='4'>4 Persons</option>
              </select>
            </div>
          </div>

          {/*  className  */}
          <div className='des-from !border-r-0'>
            <p>className</p>
            <div className='flex flex-row'>
              <img src={baggageImg} alt='' />
              <select
                className='outline-none px-2 py-2 w-full'
                name='ticketclassName'
                id='lws-ticketclassName'
                value={classType}
                onChange={e => inputValuesHandle(e)}
                required>
                <option value='' hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button className='addCity' type='submit' id='lws-addCity' disabled={collectedTicket.length >=3 ? true: false}>
            <svg
              width='15px'
              height='15px'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
            <span className='text-sm'>Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingTicket;
