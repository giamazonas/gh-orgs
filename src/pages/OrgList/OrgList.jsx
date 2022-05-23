import React, { useState, useEffect } from 'react';
import styles from "./OrgList.module.css";
import OrgCard from "../../components/OrgCard/OrgCard";
import { getOrgs } from "../../services/api-calls";

const OrgList = (props) => {
  const [orgs, setOrgs] = useState([])
  let items = orgs.items
  console.log('ITEMS', items)
  console.log('ORGS', orgs)
  // ______________________________________
  // attempt to drive into object - doesn't recognize "length"
    // for(let i = 0; i < items.length; i++){
      // let cadaUm = items[i]
        // for (let a = 0; a < cadaUm.length; a++){
        //   console.log(cadaUm[a])
        // }
    //   return cadaUm
    // }
  // console.log('CADA', cadaUm)
  // _________________________________________

//  NOTE  - having issues using slice method on an array of objects. It works, until page is reloaded, then it stops working. 

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
        {/* ______________________When the next few lines are commented out and back in it works. when page is reloaded, it fails. */}
        {items.slice(0, count).map(item => (
          <OrgCard
            key={item.id} 
            item={item} 
          />
        ))}
{/* _____________________________________________ */}
        {/* {cadaUm.slice(0, count).map(a => (
          <OrgCard
            key={a.id} 
            // item={item} 
            a={a}
          />))
        } */}
{/* _________________________________________________ */}
        <br/><button className="seeMoreButton" onClick={addTen}>See 10 More</button><br /><br /><br/>
      </div>
    </div>
  );
}

export default OrgList;
