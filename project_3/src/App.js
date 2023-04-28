import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom'; 
import './App.css';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
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
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const history = useNavigate();
  
   
    useEffect(() => {
        const filteredResults = posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase())
        )
        setSearchResults(filteredResults.reverse())
    },[posts, search])

     
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const id = posts.length ? posts[posts.length-1].id +1 : 1
      const datetime = format(new Date(),  'MMMM dd, yyyy pp');
      const newPost = {id, title: postTitle, datetime, body: postBody}; 
      const allPosts= [...posts, newPost];
      setPosts(allPosts);  
      setPostTitle('')
      setPostBody('')
      history('/')
    }


    const handleDelete = (id) => {
      const postsList = posts.filter(post => post.id !== id)
      setPosts(postsList)
      history('/')  
    }
    
    return (
    <Routes>
      <Route path="/" element={<Layout search ={search}
      setSearch={setSearch}
      />} >
         <Route index element ={<Home posts = {searchResults} />} />
          
        <Route path ="post">
          <Route index element = {<NewPost 
          handleSubmit = {handleSubmit}
          postTitle = {postTitle}
          setPostTitle = {setPostTitle}
          postBody = {postBody}
          setPostBody = {setPostBody}
          />} />
          <Route path ="/post/:id" element ={<PostPage 
          posts = {posts}
          handleDelete = {handleDelete}
          />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element = {<Missing />} />
      </Route>  
   </Routes>
      );
}

export default App;
