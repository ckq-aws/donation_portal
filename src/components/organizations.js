import React from 'react'
import Orgs from './donation_orgs'
import { Card, Button, Container, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
 
function Organizations({orgs}) {
  return (
    <>
        {Orgs.map(org => (
          <Container>
            <Row>
              <div >
                  <Card key={org}>
                    <Card.Img variant='bottom' src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
                    <Card.Title>Organizaiton: {org.organization_name}</Card.Title>
                    <Card.Body>Sector: {org.sector}</Card.Body>
                    <Card.Text>This non-profit works for the good of others who can't fight for themselves.</Card.Text>
                    <Button>Support This Cause!</Button>
                  </Card>
              </div>
            </Row>
          </Container>
        ))}
    </>
  )
}

export default Organizations