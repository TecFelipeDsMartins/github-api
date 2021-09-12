const Repos = ({search, dataRepos}) => {
const styles = {
  color: "red"
}


  return ( 
    <>
    <div styles={styles.color}>
      {dataRepos.map((repo)=> 
      <h2  key={repo.id}>{repo.name}</h2> )}
    </div>
    </>
   );
}
 
export default Repos;