import '../page/perfilStyle.css'

const Perfil = ({dataPerfil, setDataPerfil}) => {
  return ( 
    <div className="container-perfil">
      <h2>Profile</h2>
      <img src={dataPerfil.avatar_url} alt="Avatar"/>
      <h3>{dataPerfil.name}</h3>
      <span>{dataPerfil.bio}</span>
      <a href={dataPerfil.html_url} target="_blank" >Github Profile</a>
    </div>
   );
}
 
export default Perfil;