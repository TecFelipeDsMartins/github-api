const Star = ({dataStar}) => {
  return ( 
    <>
      <div className="container-star">
        <h2>Starred</h2>
        <ul>
          {dataStar.map((star)=> 
          <li key={star.id}>{star.name}</li> )}
        </ul>
      </div>
    </>
   );
}
 
export default Star;