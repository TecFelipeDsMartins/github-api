import axios from 'axios'

import { useState } from 'react'
import {Route, 
        Switch, 
        useHistory } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Repos from './Repos'
import Star from './Star'
import Search from './Search'


const Home = () => {
  const [ search, setSearch ] = useState('exemplo')
  const [ dataRepos, setDataRepos ] = useState([])
  const [ dataStar, setDataStar ] = useState([])

  const history = useHistory()
  
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
  }

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
  }


  return ( 
    <>
      
        <h1>Github-Api</h1>
        <Navbar search={search}
                setSearch={setSearch}
                handleSubmitRepos={handleSubmitRepos}
                handleSubmitStar={handleSubmitStar} />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/repos">
            <Repos dataRepos={dataRepos}/>
          </Route>
          <Route path="/star">
            <Star dataStar={dataStar}/>
          </Route>
        </Switch>
      
    </>
   );
}
 
export default Home;