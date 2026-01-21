import './App.css';
import Employee from './components/Employee'
import { useState } from 'react'

function App() {
  let [role, setRole] = useState('GIS Analyst');
  const showEmployees = true;
  return (
    <div className="App">
      {console.log('inside the return')}
      {showEmployees ? (
        <>
          <input type='text' onChange={(e) => {
            console.log(e.target.value)
            setRole(e.target.value)
          }} />
          <Employee name="Diana" role="Engineer" experience="5 Years" />
          <Employee name="John" role={role} />
          <Employee name="Aemi" />

        </>
      ) : (
        <p>You cannot see the Employees</p>
      )}
    </div>
  );
}

export default App;
