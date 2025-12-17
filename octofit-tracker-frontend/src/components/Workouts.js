import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        console.log('Workouts endpoint:', endpoint);
        console.log('Fetched workouts:', results);
      });
  }, [endpoint]);

  return (
    <div>
      <h2 className="mb-4">Workouts</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Duration (min)</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map(workout => (
                <tr key={workout.id}>
                  <td>{workout.id}</td>
                  <td>{workout.name}</td>
                  <td>{workout.description}</td>
                  <td>{workout.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
