import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import ProfileCard from '../card/ProfileCard';
import { useLocation } from 'react-router-dom';


const Landing = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const params = useLocation();
    const [topUser, setTopUser] = useState(null);



    function fetchAllUsers() {
        setLoading(true);
        fetch('https://api.github.com/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setUsers(data.reverse());
                setLoading(false);
            })
    }

    function fetchUserByName(search) {
        setLoading(true);
        fetch(`https://api.github.com/users/${search}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('data', data);
                setTopUser(data);
                setLoading(false);
            })
    }
    useEffect(() => {

        if (params?.search) {
            fetchUserByName(params.search.split('=')[1])
        }

        fetchAllUsers()
    }, [params])
    return (
        <Container>

            {topUser && (
                <Row>
                    <h5 className='mt-5'>Searched by: {params.search.split('=')[1]}</h5>
                    <Col lg="3" className='mb-5'>
                        <ProfileCard user={topUser} />
                    </Col>
                </Row>
            )}


            <Row>
                {loading ? <div className='text-center my-5' >
                    <Spinner />
                </div> : users?.map((user, i) => (
                    <Col lg="3" key={i} className='my-3'>
                        <ProfileCard user={user} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Landing