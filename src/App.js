import React, {useState} from 'react';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'fgfg', body: '11'},
        {id: 2, title: 'errr 2', body: 'Descriddption'},
        {id: 3, title: 'aaaa 3', body: '33'},
    ])

    const [selectedSort, setSelectedSort] = useState('')
    /* const [posts2, setPosts2] = useState([
         {id: 1, title: 'Python', body: 'Description'},
         {id: 2, title: 'Python 2', body: 'Description'},
         {id: 3, title: 'Python 3', body: 'Description'},
     ])*/

    const [searchQuery, setSearchQuery] = useState('')


    function getSortedPosts() {
        console.log("DONE")
        if (selectedSort){
            return [...posts].sort((a, b) =>
                a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const sortedPosts = getSortedPosts();

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) =>
            a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Sort by"
                    options={[
                        {value: 'title', name: 'By Name'},
                        {value: 'body', name: 'By Description'},
                    ]}
                />
            </div>
            {posts.length !== 0
                ? <PostList remove={removePost} posts={sortedPosts} title={"Posts about JS"}/>
                : <h1 style={{textAlign: 'center'}}>Posts does not found!</h1>
            }
        </div>
    );
}

export default App;




