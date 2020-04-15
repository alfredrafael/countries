import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import {StyledFooter} from './StyledFooter';
 

const AppFooter = () => {
return(
    <React.Fragment>
    <StyledFooter className="footer">
    <Container>

    <Row>
      
    <Col>
        Column 1    
    </Col>
    
    <Col>
        Column 2
    </Col>
    
    <Col>
        Column 3
    </Col>
    </Row>
    </Container>

  </StyledFooter>
    </React.Fragment>
)}

export default AppFooter;

