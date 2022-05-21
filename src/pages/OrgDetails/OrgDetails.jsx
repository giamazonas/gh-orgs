import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getOrgs } from "../../services/api-calls";
import styles from './OrgDetails.module.css'
import { Link } from 'react-router-dom';

const OrgDetails = (props) => {
  const location = useLocation()
  const [orgDetails, setOrgDetails] = useState([])
  console.log('location ', location.state.eachOrg)

  useEffect(() => {
    getOrgs(location.state.eachOrg)
    .then(o => {
      setOrgDetails(o)
    })
  }, [location.state.eachOrg])

  return (  
    <div className={styles.container}>
      <h1 className="title" > {location.state.eachOrg.login} </h1>
      <p className="detailContainer">Name: {location.state.eachOrg.login}</p>
      <p className="detailContainer">ID:  {location.state.eachOrg.id}</p>
      <p className="detailContainer"><a href={location.state.eachOrg.events_url}>Events</a></p>
      <p className="detailContainer"><a href={location.state.eachOrg.followers_url} >Followers</a></p>
      <p className="detailContainer"><a href={location.state.eachOrg.following_url} >Following</a></p>
      <div><br /><br />
        <button className="seeMoreButton"> 
          <Link to="/">Back to Main</Link>
        </button>
      </div>
    </div>
  );
}

export default OrgDetails;