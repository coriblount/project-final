import React from 'react'

const SearchAppointments = (props) => {
    return (
        <div className="ui large fluid icon input">
          <input
            type="text"
            placeholder={"Search Appointment"}
            onChange={(e) => {
              props.searchAppointments(e)
            }}
          />
          <i className="circular search link icon"></i>
        </div>
      );
}

export default SearchAppointments