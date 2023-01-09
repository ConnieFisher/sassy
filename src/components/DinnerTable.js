import { useEffect, useState } from 'react'
import axios from 'axios'

const DinnerTable = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('/db/items.json')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <main>
      <div className='centerTitle'>
       <h1>Dinner Menu</h1>
        <h2>1/8/2023 to 1/14/2023</h2>
      </div>
      <table className='dinnerTable'>
        <tr>
          <th>Weekday</th>
          <th>Date</th>
          <th>Entre</th>
          <th>Vegetable</th>
          <th>Starch</th>
        </tr>
        {users.map((user, key="_id") => {
          return (
            <tr>
              <td>{user.dayofweek}</td>
              <td>{user.date}</td>
              <td>{user.entre}</td>
              <td>{user.veg}</td>
              <td>{user.starch}</td>
            </tr>
          )
        })}
      </table>
    </main>
  )
}

export default DinnerTable
