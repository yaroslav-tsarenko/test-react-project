import React, {useState} from 'react';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import './styles/App.css'

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'},
    ])
    /* const [posts2, setPosts2] = useState([
         {id: 1, title: 'Python', body: 'Description'},
         {id: 2, title: 'Python 2', body: 'Description'},
         {id: 3, title: 'Python 3', body: 'Description'},
     ])*/

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList remove={removePost} posts={posts} title={"Posts about JS"}/>
        </div>
    );
}

export default App;




