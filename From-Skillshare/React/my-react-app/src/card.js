import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function CardGrid() {
    return (
        <MDBContainer style={{ padding: '20px', background: "#333333" }}>
            <MDBRow>
                <MDBCol size='md'>
                    <Card1/>
                </MDBCol>
                <MDBCol size='md'>
                    <Card2/>
                </MDBCol>
                <MDBCol size='md'>
                    <Card3/>
                </MDBCol>
                <MDBCol size='md'>
                    <Card4/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

function Card1() {
    return (
        <MDBCard>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
            <MDBCardBody>
                <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    );
}

function Card2() {
    return (
        <MDBCard>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
            <MDBCardBody>
                <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    );
}

function Card3() {
    return (
        <MDBCard>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
            <MDBCardBody>
                <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    );
}

function Card4() {
    return (
        <MDBCard>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
            <MDBCardBody>
                <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    );
}

export default CardGrid;