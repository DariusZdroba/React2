import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom'; 
import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [posts, setPosts] = useState([
      { 
        id: 1,
        title: "My first post",
        datetime: "April 17th 2023, 11:46 PM",
        body: "Wondering if I should wonder less...."
      },
      { 
        id: 2,
        title: "My second post",
        datetime: "April 17th 2023, 11:47 PM",
        body: "Liverpool 6, Leeds United, 1"
      },
      { 
        id: 3,
        title: "My third post",
        datetime: "April 17th 2023, 11:48 PM",
        body: "lolololololo fede valverde"
      }
    ])
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
         <Route index element ={<Home posts = {posts} />} />
          
        <Route path ="post">
          <Route index element = {<NewPost />} />
          <Route path ="/post/:id" element ={<PostPage />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element = {<Missing />} />
      </Route>  
   </Routes>
      );
}

export default App;
