const Star = ({dataStar}) => {
  return ( 
    <>
      {dataStar.map((star)=> 
      <h2>{star.name}</h2> )}
    </>
   );
}
 
export default Star;