import React from 'react'
interface User {
  id: number;
  name: string;
  age: number;
  status: 'single' | 'married';  
  img: string;
}
function UserContext() {
  return (
    <div>UserContext</div>
  )
}

export default UserContext