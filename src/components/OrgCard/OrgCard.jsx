// import styles from './orgcard.module.css'
import { Link } from 'react-router-dom'

const OrgCard = (props) => {
  console.log('CARD TEST', props)
  
  let eachOrg = props.item 
  console.log('DIG', eachOrg.login)

  return (  
    <>
    <div className="orgCard">
      <h1></h1>
        <h2>{eachOrg.login}</h2>
        <h2>{eachOrg.organizations_url}</h2>
    </div>
    <Link 
      to={`/${eachOrg.login}`}
      state={eachOrg}
    >See More info..</Link>
    </>
  );
}

export default OrgCard;