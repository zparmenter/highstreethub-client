import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { AuditContext } from '../context/AuditContext';


/*---------------------------COMPANY PAGE IMPORTS-----------------------------*/
import CompanyEdit from '../pages/companyPages/CompanyEdit';
import CompanyCreate from '../pages/companyPages/CompanyCreate';
import CompanyList from '../pages/companyPages/CompanyList';
import CompanyShow from '../pages/companyPages/CompanyShow';

/*---------------------------AUDIT PAGE IMPORTS-----------------------------*/
import AuditList from '../pages/auditPages/AuditList';
import AuditShow from '../pages/auditPages/AuditShow';
import AuditCreate from '../pages/auditPages/AuditCreate';

import Home from '../pages/Home';

export default function Directions() {
    

    return(
        <Routes>
            <Route exact path='/' element={ Home } />
            <Route exact path='/companies/' element={ <CompanyList  /> } />
            <Route exact path='/companies/:id' element={ <CompanyShow /> } />
            <Route exact path='/companies/:id/companyedit' element={ <CompanyEdit /> } />
            <Route exact path='/companies/createcompany' element={ <CompanyCreate />} />

            <Route exact path='/audits/' element={ <AuditList /> } />
            <Route exact path='/audits/:id' element={ <AuditShow /> } />           
            <Route exact path='/companies/:id/createaudit' element={ <AuditCreate /> } />

        </Routes>
    )
}