import React, { useState, useEffect } from 'react';
import styles from "./OrgList.module.css";
import OrgCard from "../../components/OrgCard/OrgCard";
import { getOrgs } from "../../services/api-calls";

const OrgList = (props) => {
  const [orgs, setOrgs] = useState([])
  let items = orgs.items
  const [count, setCount] = useState(10)
  const addTen = () => {
    setCount(count +10)
  }

  useEffect(() => {
    const fetchGetOrgs = async() => {
      const orgData = await getOrgs()
      setOrgs(orgData)
    }
    fetchGetOrgs()
  }, [])
  
  return (  
    <div className={styles.container} id="ListContainer">
      <div 
      className="ListContainer" 
      ><br /><br />
        <h1>GitHub Organizations</h1>
        {items.slice(0, count).map(item => (
          <OrgCard
            key={item.id} 
            item={item} 
          />
        ))}
        <br/><button className="seeMoreButton" onClick={addTen}>See 10 More</button><br /><br /><br/>
      </div>
    </div>
  );
}

export default OrgList;
