import React, { useState, useEffect } from 'react';
import styles from "./OrgList.module.css";
import OrgCard from "../../components/OrgCard/OrgCard";
import { getOrgs } from "../../services/api-calls";

const OrgList = (props) => {
  const [orgs, setOrgs] = useState([])
  let items = orgs.items
  console.log(items)

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
        {items.map(item => (
          <OrgCard
            // key={org._id} 
            item={item} 
          />
        ))}
      </div>
    </>
  );
}

export default OrgList;
