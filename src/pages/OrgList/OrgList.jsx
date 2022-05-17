import React, { useState, useEffect } from 'react';
import styles from "./OrgList.module.css";
import OrgCard from "../../components/OrgCard/OrgCard";
import { getOrgs } from "../../services/api-calls";

const OrgList = (props) => {
  const [orgs, setOrgs] = useState([])

  useEffect(()=> {
    getOrgs()
    .then(orgData => setOrgs(orgData))
  }, [])

  return (  
    <>
      <h1>GitHub Organizations</h1>
      <div 
      className={styles.container}
      >
        {orgs.map(org => (
          <OrgCard
            // key={org._id} 
            org={org} 
          />
        ))}
      </div>
    </>
  );
}

export default OrgList;
