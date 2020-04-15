import React from 'react';

import ServiceCards from './service-cards';

function Services() {

  return (
    <section className="services" id="services">
      <div className="services-head">
        <h3>Our Core Services</h3>
        <p>While we are always looking to expand our business, we have focused our attention to these areas:</p>
        {/* <p>Taxes</p> */}
      </div>
      <div className="services-body">
        <ServiceCards />
      </div>
    </section>
  )
}

export default Services;