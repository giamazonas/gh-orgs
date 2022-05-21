import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getOrgs } from "../../services/api-calls";
import styles from './OrgDetails.module.css'
import { Link } from 'react-router-dom';

const OrgDetails = (props) => {
  const location = useLocation()
  const [orgDetails, setOrgDetails] = useState([])

  useEffect(() => {
    getOrgs(location.state.eachOrg)
    .then(o => {
      setOrgDetails(o)
    })
  }, [location.state.eachOrg])

  return (  
    <div className={styles.container}>
      <br/>
      <h1 className="title" > {location.state.eachOrg.login} </h1><br/>
      <p className="detailContainer">Name:<br/> {location.state.eachOrg.login}</p>
      <p className="detailContainer">ID: <br/> {location.state.eachOrg.id}</p>
      <p className="detailContainer"><a href={location.state.eachOrg.events_url}>Events: <br/> {location.state.eachOrg.events_url}<br/> </a></p>
      <p className="detailContainer"><a href={location.state.eachOrg.followers_url} >Followers: <br/> {location.state.eachOrg.followers_url}<br /></a></p>
      <p className="detailContainer"><a href={location.state.eachOrg.following_url} >Following: <br/>{location.state.eachOrg.following_url} <br/></a></p>
      <div><br /><br />
        <button className="seeMoreButton"> 
          <Link to="/"> Back to Main</Link>
        </button><br/>
      </div>
    </div>
  );
}

export default OrgDetails;