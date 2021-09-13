import '../page/perfilStyle.css'

const Perfil = ({dataPerfil, setDataPerfil}) => {
  return ( 
    <div className="container-perfil">
      <img src={dataPerfil.avatar_url}/>
      <h2>{dataPerfil.name}</h2>
      <span>{dataPerfil.bio}</span>
      <a href={dataPerfil.html_url} target="_blank" >Github Profiel</a>
    </div>
   );
}
 
export default Perfil;