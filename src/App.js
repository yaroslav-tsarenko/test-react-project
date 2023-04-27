import React, {useRef, useState} from 'react';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import './styles/App.css'
import MyInput from "./components/UI/input/MyInput";

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

    const [title, setTitle] = useState('')
    const bodyInputRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(bodyInputRef.current.value)
    }



    return (
        <div className="App">
            <form>
                {/*Component manager*/}
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Name of post"/>

                <MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder="Description of post"/>
                <MyButton type="submit" onClick={addNewPost}>Create post</MyButton>
            </form>
            <PostList posts={posts} title={"Posts about JS"}/>
        </div>
    );
}

export default App;




