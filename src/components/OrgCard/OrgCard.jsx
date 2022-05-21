import styles from './OrgCard.module.css'
import { Link } from 'react-router-dom'

const OrgCard = (props) => {
  
  let eachOrg = props.item 

  return (  
    <div  className={styles.container} >
      <div className="orgCard" id="orgCard"  >
        <h2>{eachOrg.login}</h2>
        <h2>{eachOrg.organizations_url}</h2>
        <p> HELLO HI HELLO </p>
        <Link 
          to={`/${eachOrg.id}`}
          eachOrg={eachOrg}
          state={{eachOrg}}
        >See More info..</Link>
      </div>
    </div>
  );
}

export default OrgCard;