import styles from './OrgCard.module.css'
import { Link } from 'react-router-dom'

const OrgCard = (props) => {
  
  let eachOrg = props.item 

  return (  
    <div  className={styles.container} >
      <div className="orgCard" id="orgCard"  >
        <h2>{eachOrg.login}</h2>
        <h2> Organization URL: <br/>{eachOrg.organizations_url}</h2>
        <Link 
          to={`/${eachOrg.id}`}
          eachOrg={eachOrg}
          state={{eachOrg}}
        >SEE MORE DETAILS</Link>
      </div>
    </div>
  );
}

export default OrgCard;