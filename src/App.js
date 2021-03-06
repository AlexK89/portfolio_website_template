import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { fetchData } from './helpers/API'
import Loader from './components/Loader/Loader'
import { URL } from './helpers/static'

import Navigation from './components/Navigation/Navigation'
import About from './containers/About/About'
import Portfolio from './containers/Portfolio/Portfolio'
import Project from './containers/Project/Project';
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
    details ?
      <div className="App">
        <Navigation details={details} />

        <Switch>
          <Route path={`${URL}/`} exact component={() =>
            (about && projects) ? <About about={about} projects={projects} /> : <Loader />
          } />
          <Route path={`${URL}/portfolio`} exact component={() =>
            (portfolio && projects) ? <Portfolio portfolio={portfolio} projects={projects} /> : <Loader />
          } />
          <Route path={`${URL}/portfolio/project/:projectId`} component={(props) =>
            projects ? <Project projects={projects} projectId={props.match.params.projectId} />
              : <Loader />
          } />
        </Switch>

        <footer>
          <p>&copy; Kristina Kozhushko | <a href="http://www.codersinhoods.dev">CodersInHoods</a></p>
        </footer>
      </div>
      : <Loader />
  )
}

export default App
