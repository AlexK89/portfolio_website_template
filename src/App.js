import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { fetchData } from './helpers/API'
import Loader from './components/Loader/Loader'

import Navigation from './components/Navigation/Navigation'
import About from './containers/About/About'
import Portfolio from './containers/Portfolio/Portfolio'
import Project from './containers/Peoject/Project';
import './App.scss'


function App() {

  const [content, setcontent] = useState({ details: null, about: null, portfolio: null, projects: null })

  useEffect(() => {
    const fetchAll = async () => {
      const details = await fetchData(`details`)
      const about = await fetchData('aboutPage')
      const portfolio = await fetchData('portfolioPage')
      const projects = await fetchData('projects')

      setcontent({ details, about, portfolio, projects })
    }

    fetchAll()
      .catch(e => console.error('CIH: fetchAll'))
  }, [])

  const { details, about, portfolio, projects } = content

  return (
    (details && about && portfolio && projects) ?
      <div className="App">
        <Navigation details={details} />
        <Switch>
          <Route path="/" exact component={() => <About about={about} projects={projects} />} />
          <Route path="/portfolio" exact component={() => <Portfolio portfolio={portfolio} projects={projects} />} />
          <Route path="/Portfolio/project/:projectId" component={(props) => <Project projects={projects} projectId={props.match.params.projectId}/>}/>
        </Switch>
        <footer>
          <p>&copy; Kristina Kozhushko | <a href="http://www.codersinhoods.dev">CodersInHoods</a></p>
        </footer>
      </div>
      : <Loader />
  )
}

export default App
