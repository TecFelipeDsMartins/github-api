import '../page/reposStyle.css'

const Repos = ({search, dataRepos}) => {

  return ( 
    <>
    <div className="container-repos">
      {dataRepos.map((repo)=> 
      <h2  key={repo.id}>{repo.name}</h2> 
      )}
    </div>
    </>
   );
}
 
export default Repos;