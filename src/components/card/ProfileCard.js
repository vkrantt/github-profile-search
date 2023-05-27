import React from 'react'
import { Card } from 'react-bootstrap'
import Avatar from '../avatar/Avatar'
import sampledata from '../../service/sampledata'

const ProfileCard = ({ user }) => {

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 100)
    }

    const getRandomBio = () => {
        const n = Math.floor(Math.random() * sampledata.length)
        return sampledata[n].bio
    }
    return (
        <Card className='border-0 shadow bg-light'>

            <Card.Body className="text-center">
                <Avatar src={user.avatar_url} alt={user.login} />

                <Card.Title>{user.login}</Card.Title>
                <h6 className="text-muted">{user.type}</h6>

                <div className='d-flex justify-content-around text-center'>
                    <div style={{ fontSize: '12px' }} className="text-muted">
                        Repos
                        <p>{user.public_repos || generateRandomNumber()}</p>
                    </div>
                    <div style={{ fontSize: '12px' }} className="text-muted">
                        Follwers
                        <p>{user.followers || generateRandomNumber()}</p>
                    </div>
                    <div style={{ fontSize: '12px' }} className="text-muted">
                        Following
                        <p>{user.following || generateRandomNumber()}</p>
                    </div>
                </div>

                <Card.Text>
                    {user.bio || getRandomBio()}
                </Card.Text>
                <a href={user.html_url} target='_blank' className='btn btn-outline-dark rounded-pill' variant="primary">View Profile</a>
            </Card.Body>
        </Card>
    )
}

export default ProfileCard