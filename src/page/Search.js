import '../page/searchStyle.css'
import searchoctocat from '../assets/searchoctocat.png'

const Search = () => {
  return ( 
    <div className="container-search">
      <h2>Search for a github user</h2>
      <img 
        className="search-octocat"
        src={searchoctocat} alt="octocat looking for" />
    </div>
   );
}
 
export default Search;