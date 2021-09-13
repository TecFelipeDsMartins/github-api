import '../page/searchStyle.css'
import searchoctocat from '../assets/searchoctocat.png'

const Search = () => {
  return ( 
    <div className="container-search">
      <img className="search-octocat"
           src={searchoctocat} 
           alt="octocat looking for"/>
    </div>
   );
}
 
export default Search;