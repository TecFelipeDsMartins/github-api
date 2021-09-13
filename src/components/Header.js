import '../components/headerStyle.css'

const Header = ({setSearch, handleSubmitRepos, handleSubmitStar, handleSubmitPefil}) => {
  
  return ( 
    <>
      <header className="container">
        <h1>GitHub - Api</h1>
        <form>
          <input 
            type="text" 
            placeholder="Search user github"
            onChange={(e)=>setSearch(e.target.value)}
            required
          />
          <div className="container-btn">
            <button onClick={handleSubmitPefil}>Profile</button>
            <button onClick={handleSubmitRepos}>Repository</button>
            <button onClick={handleSubmitStar}>Starred</button>
          </div>
        </form>
      </header>
    </>
   );
}
 
export default Header;