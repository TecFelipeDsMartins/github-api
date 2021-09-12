import octocat from '../assets/octocat.gif'

const NotFound = () => {
  return ( 
    <>
      <h2>This user its not found here... sorry!</h2>
      <img src={octocat} alt="Octocat" />
    </>
   );
}
 
export default NotFound;