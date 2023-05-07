import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import EditPost from './EditPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom'; 
import './App.css';
import { DataProvider } from './context/DataContext';

function App() {
  
   return (
    <div>
    <DataProvider>
      <Routes>
      <Route path="/" element={<Layout/>} >
         <Route index element ={<Home />} />
          
        <Route path ="post">
          <Route index element = {<NewPost />} />
          
          <Route path ="/post/:id" element ={<PostPage  />} />
        </Route>
        <Route path="/edit/:id" element={<EditPost/>}
          />
        <Route path="about" element={<About />} />
        <Route path="*" element = {<Missing />} />
      </Route>  
   </Routes>
   </DataProvider>
  </div>    
      );
}

export default App;
