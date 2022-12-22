import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import React, { Component } from 'react'

export default class Profile extends Component {
  
  render() {
    console.log(this.props.list)
    return (
      
<div className="vh-100" style={{ backgroundColor: '#9de2ff'}}>
      <MDBContainer>
        <MDBRow className="justify-content-center" style={{width: '400px', borderRadius: '200px'}}>
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px'}}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px', margin: '50px'}}
                      src={this.props.list.url}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3" style={{ backgroundColor: '#efefef' }}>
                    <MDBCardTitle>{this.props.list.name}</MDBCardTitle>
                    <MDBCardText>{this.props.list.profession}</MDBCardText>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <h3 className="small text-muted mb-1">Articles</h3>
                        <p className="mb-0">{this.props.list.articles}</p>
                      </div>
                      <div className="px-3">
                        <h3 className="small text-muted mb-1">Followers</h3>
                        <p className="mb-0">{this.props.list.followers}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    )
  }
}