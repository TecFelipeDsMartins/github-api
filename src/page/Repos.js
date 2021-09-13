import '../page/reposStyle.css'

const Repos = ({search, dataRepos}) => {

  return ( 
    <>
    <div className="container-repos">
      <h2>Repository</h2>
      <ul>
      {dataRepos.map((repo)=> 
      <li  key={repo.id}>{repo.name}</li> 
      )}
      </ul>
    </div>
    </>
   );
}
 
export default Repos;