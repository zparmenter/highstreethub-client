import React from "react";

function CompanyCard(props) {
  return (
    
      <>
        <div class='modelListCard'>
          <div>
            <h1>{ props.companyName }</h1>
          </div>
          <div>
            <img style={{height: '200px', width: '200px', borderRadius: '50%' }}src={props.logo} alt={props.companyName} />
          </div>
        </div>
      </>
    
  );
}

export default CompanyCard;