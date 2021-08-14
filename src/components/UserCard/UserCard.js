import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './UserCard.css'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUserById } from '../../js/action'

const UserCard = ({user}) => {
    const dispatch = useDispatch()

    return (
        <Card style={{ width: '18rem' ,margin:"10px"}}>
  <p className="card-img mx-auto" >{user.name[0]}</p>
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
     {user.email}
    </Card.Text>
   <Link to={`/user/${user.id}`} onClick={() => dispatch(getUserById(user.id))}> <Button variant="primary">View</Button></Link>
  </Card.Body>
</Card>
    )
}

export default UserCard
