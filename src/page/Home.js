import { useState } from 'react'
import {BrowserRouter as Router, Route, link, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Repos from './Repos'
import Star from './Star'
import Search from './Search'


const Home = () => {
  const [ search, setSearch ] = useState('Ele Salva')
  const [ dataRepos, setDataRepos ] = useState('Repos')
  const [ dataStar, setDataStar ] = useState('Star')

  
  const handleSubmitRepos = (e) => {
    e.preventDefault()
    setDataRepos(search)
  }

  const handleSubmitStar = (e) => {
    e.preventDefault()
    setDataStar(search)
  }


  return ( 
    <>
      <Router>
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
      </Router>
    </>
   );
}
 
export default Home;