import React, { useState } from 'react';
import { appointmentTimeOfDay } from '../helpers/appointments.helper';

export const Appointment = ({ customer }) => {
  return (
    <div>
      {customer.firstName}
    </div>
  )
}

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0)
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment, i) =>
          <li key={i}>
            <button type="button" onClick={() => setSelectedAppointment(i)}>
              {appointmentTimeOfDay(appointment.startsAt)}
            </button>
          </li>)}
      </ol>
      {appointments.length === 0 ? <p>There are no appointments scheduled for today</p> : <Appointment customer={appointments[selectedAppointment].customer} />}
    </div>
  )
}