import axios from 'axios'

import { useState } from 'react'
import {Route, 
        Switch, 
        useHistory } from 'react-router-dom'

import Header from '../components/Header'
import Perfil from './Perfil'
import Repos from './Repos'
import Star from './Star'
import Search from './Search'
import NotFound from './NotFound'


const Home = () => {
  
  const [ search, setSearch ] = useState('')
  const [ dataPerfil, setDataPerfil ] = useState([])
  const [ dataRepos, setDataRepos ] = useState([])
  const [ dataStar, setDataStar ] = useState([])

  const history = useHistory()
  
  
  //fetch perfil data
  const handleSubmitPerfil = (e) => {
    e.preventDefault()
    axios({
      method: 'GET',
      url: `https://api.github.com/users/${search}`
    })
    .then(res => {
      setDataPerfil(res.data)
      history.push('/perfil')
    })
    .catch((err)=>{
      console.log(err.message, 'Sorry')
      history.push('/notfound')
    })
  }
  
  //Fetch repositorio data
  const handleSubmitRepos = (e) => {
    e.preventDefault()
    axios({
      method: 'GET',
      url: `https://api.github.com/users/${search}/repos`
    })
    .then(res => {
      setDataRepos(res.data)
      history.push('/repos')
    })
    .catch((err)=>{
      console.log(err.message, 'Sorry')
      history.push('/notfound')
    })
  }

  //Fetch starred data
  const handleSubmitStar = (e) => {
    e.preventDefault()
    axios({
      method: 'GET',
      url: `https://api.github.com/users/${search}/starred`
    })
    .then(res => {
      setDataStar(res.data)
      history.push('/star')
    })
    .catch((err)=>{
      console.log(err.message, 'Sorry')
      history.push('/notfound')
    })
  }

  return ( 
    <>
      <Header 
        search={search}
        setSearch={setSearch}
        handleSubmitPefil={handleSubmitPerfil}
        handleSubmitRepos={handleSubmitRepos}
        handleSubmitStar={handleSubmitStar} 
      />
      
      <section className="page-container">      
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/perfil">
            <Perfil dataPerfil={dataPerfil} />
          </Route>
          <Route path="/repos">
            <Repos dataRepos={dataRepos}/>
          </Route>
          <Route path="/star">
            <Star dataStar={dataStar}/>
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </section>        
    </>
   );
}
 
export default Home;