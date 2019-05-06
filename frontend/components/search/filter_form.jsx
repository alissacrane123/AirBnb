import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({filters, updateFilter}) => (
  <div className="nav2-search-outer">
    <div className="nav2-search-inner">
      <input onChange={handleChange('city', updateFilter)} type="text" placeholder="Try &quot;Mars&quot;" id="nav2-search" />
    </div>
  </div>
);


export default FilterForm;








  // < div className = "splash-search-inputs" >

  //   <div className="splash-input-container">
  //     <p className="splash-input-label">WHERE</p>
  //     <div className="splash-input-div">
  //       <input className="splash-input" type="text" placeholder="San Francisco, CA, United States" />
  //     </div>
  //   </div>

  //   <div className="splash-input-container">
  //     <p className="splash-input-label">CHECK-IN</p>
  //     <div className="splash-input-div">
  //       <input className="splash-input" type="text" placeholder="mm/dd/yyyy" />
  //     </div>
  //   </div>

  //   <div className="splash-input-container">
  //     <p className="splash-input-label">GUESTS</p>
  //     <div className="splash-input-div">

  //       <select className="splash-guests" placeholder="Guests">
  //         {guests}
  //       </select>
  //     </div>
  //   </div>

  //   <div className="splash-submit-wrap">
  //     <button className="splash-submit">Search</button>
  //   </div>
  // </div >