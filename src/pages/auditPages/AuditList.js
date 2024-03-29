import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import AuditModel from '../../models/audit';
import AuditCard from '../../components/AuditCard';
import Header from '../../components/Header';

function AuditList(props) {
    const [audits, setAudits] = useState([]);

    useEffect(
        function () {
            fetchAudits();
        }, []
    );

    function fetchAudits() {
        AuditModel.all().then((data) => {
            setAudits(data.audits);
        });
    }

    function generateList(audits) {
        return audits.map((audit, index) => (
            <NavLink to={`/audits/${audit._id}`} key={index}>
                <AuditCard  {...audit} />
            </NavLink>
            
        ));
    }



    return(
        <>
        <Header />
        <h1>Audits List</h1><br/><br/>
        # of audits: {audits.length}
            <div className='modelListDiv'>
                
                {audits.length ? generateList(audits) : <h2>Loading...</h2>}
            </div>
        </>
    )


}

export default AuditList;