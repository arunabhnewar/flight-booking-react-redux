import React from "react";
import fromImg from "../../assets/icons/Frame.svg";
import guestImg from "../../assets/icons/Vector (1).svg";
import baggageImg from "../../assets/icons/Vector (3).svg";

const BookingTicket = () => {
  return (
    <div className='mt-[160px] mx-4 md:mt-[160px] relative'>
      <div className='bg-white rounded-md max-w-6xl w-full mx-auto'>
        <form className='first-hero lws-inputform'>
          {/*  From  */}
          <div className='des-from'>
            <p>Destination From</p>
            <div className='flex flex-row'>
              <img src={fromImg} alt='From Icon' />
              <select
                className='outline-none px-2 py-2 w-full'
                name='from'
                id='lws-from'
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
                required>
                <option value='' hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button className='addCity' type='submit' id='lws-addCity'>
            <svg
              width='15px'
              height='15px'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='2'
              stroke='currentColor'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
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
