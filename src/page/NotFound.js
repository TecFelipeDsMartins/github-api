import { Link } from 'react-router-dom'
import octocat from '../assets/octocat.gif'
import '../page/notFoundStyle.css'

const NotFound = () => {
  return ( 
    <>
      <div className="container__not">
        <h2>This user its not found here<br/>... sorry!</h2>
        <img src={octocat} alt="Octocat" />
        <Link to="/">Go Back to homepage</Link>
      </div>
    </>
   );
}
 
export default NotFound;