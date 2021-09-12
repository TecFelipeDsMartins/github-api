const Repos = ({search, dataRepos}) => {

  return ( 
    <>
      {dataRepos.map((repo)=> 
      <h2>{repo.name}</h2> )}
    </>
   );
}
 
export default Repos;