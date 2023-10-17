import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Products from './components/Products'
import Layout from './components/shared/Layout'
function App() {

  return (
<Router>
<Routes>
  <Route path="/" element={<Layout/>}>

    <Route index element={<Dashboard />} />
    <Route path="products" element={<Products />}/>
  </Route>
</Routes>
</Router>
  )
}

export default App
