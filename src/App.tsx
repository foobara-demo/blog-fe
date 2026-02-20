import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './App.css'
import Header from './Header'
import Home from './Home'
import Articles from './Articles'
import CreateArticle from './CreateArticle'
import Register from './Register'
import EditArticle from './EditArticle'
import Login from './Login'

function App () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id/edit" element={<EditArticle />} />
        <Route path="/create-article" element={<CreateArticle />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
