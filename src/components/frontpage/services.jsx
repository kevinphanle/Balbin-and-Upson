import React from 'react';

import ServiceCards from './service-cards';

function Services() {

  return (
    <section className="services" id="services">
      <div className="services-head">
        <h3>Our Core Services</h3>
        <p>Every number and line we deliver is carefully filled in by our professional team. While we are always looking to expand our business, we have focused our attention to these areas:</p>
      </div>
      <div className="services-body">
        <ServiceCards />
      </div>
    </section>
  )
}

export default Services;