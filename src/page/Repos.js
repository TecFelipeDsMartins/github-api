const Repos = ({search, dataRepos}) => {

  return ( 
    <>
      {dataRepos.map((repo)=> 
      <h2 key={repo.id}>{repo.name}</h2> )}
    </>
   );
}
 
export default Repos;