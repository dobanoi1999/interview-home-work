import "bootstrap/dist/css/bootstrap.min.css"
import { Header, ListPost, NotFound } from "./Component"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchAllPost } from "./Redux/action/postAction"
import { fetchUser } from './Redux/action/userAction'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllPost())
    dispatch(fetchUser())

  }, [])
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ListPost} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
