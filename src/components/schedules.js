import React from 'react'

const Schedules = ({ train }) => {
  return (
    <div>
      <center><h1>MTR Schedule</h1></center>
      {train.map((train) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{train[0].ttnt}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{train[0].ttnt}</h6>
            <p class="card-text">{train[0].ttnt}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Schedules