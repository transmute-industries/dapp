import * as React from 'react';
import './BioIDDemo.css';
import { connect } from 'react-redux';
import LightWalletCard from './LightWalletCard/LightWalletCard';
import SelectEventStoreCard from '../../Common/SelectEventStoreCard/SelectEventStoreCard';

// import BioIDCard from './BioIDCard/BioIDCard';
// import AuditLogCard from './AuditLogCard/AuditLogCard'

import { Grid, Row, Col } from 'react-flexbox-grid';

class BioIDDemo extends React.Component<any, any> {
  render() {
    return (
      <div className="material-demo" style={{ paddingTop: '32px' }} >
        <Grid fluid={true} >
          <Row>
            <Col xs={12} sm={12}>
              <LightWalletCard />
              <SelectEventStoreCard />
              {/* 
              <BioIDCard />
              <AuditLogCard /> */}
            </Col>
          </Row>
          {/* <Row style={{ paddingTop: '32px' }}>
            <Col xs={12} sm={6}>
             
            </Col>
            <Col xs={12} sm={6}>
             
            </Col>
          </Row> */}
        </Grid>
      </div>
    );
  }
}

export default connect((state: any) => ({
  transmute: state.transmute,
  router: state.router
}))(BioIDDemo);
