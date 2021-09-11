const Navbar = ({search, setSearch, handleSubmitRepos, handleSubmitStar}) => {
  
  return ( 
    <>
      <form>
        <input type="text" 
    
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button onClick={handleSubmitRepos}>Repository</button>
        <button onClick={handleSubmitStar}>Starred</button>
      </form>
    </>
   );
}
 
export default Navbar;