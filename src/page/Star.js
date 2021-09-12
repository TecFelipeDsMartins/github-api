const Star = ({dataStar}) => {
  return ( 
    <>
      {dataStar.map((star)=> 
      <h2 key={star.id}>{star.name}</h2> )}
    </>
   );
}
 
export default Star;