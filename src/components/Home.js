import { useState } from 'react'
import Navbar from './Navbar'
import Repos from './Repos'
import Star from './Star'


const Home = () => {
  const [ search, setSearch ] = useState('Ele Salva')
  const [ dataRepos, setDataRepos ] = useState('Repos')
  const [ dataStar, setDataStar ] = useState('Star')

  const handleSubmitRepos = (e) => {
    e.preventDefault()
    setDataRepos('Obrigado')
  }

  const handleSubmitStar = (e) => {
    e.preventDefault()
    setDataStar('Jesus')
  }


  return ( 
    <>
      <h1>Github-Api</h1>
      <Navbar search={search}
              setSearch={setSearch}
              handleSubmitRepos={handleSubmitRepos}
              handleSubmitStar={handleSubmitStar} />
      <Repos dataRepos={dataRepos}/>
      <Star dataStar={dataStar}/>
    </>
   );
}
 
export default Home;