import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeadPage from './components/HeadPage'
import NotFoundPage from './components/NotFoundPage'
import CreatePost from './components/CreatePost'
import DisplayPage from './components/DisplayPage'
import EditPage from './components/EditPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HeadPage />} />
        <Route path="/posts/new"  element={<CreatePost/>}/>
        <Route path="/posts/:id"  element={<DisplayPage/>} />
        <Route path="/posts/:id/:edit"  element={<EditPage/>} />
        <Route path="*"  element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App