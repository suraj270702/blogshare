import React, { useEffect, useState } from "react";
import { collection, deleteDoc, getDocs,doc } from "firebase/firestore";
import { auth, db } from "../firebase-configuration";

const Home = ({login}) => {
  const [postsList, setPostsList] = useState([]);
  const postsReference = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsReference);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  const deletePost = async(id) =>{
    const postDoc = doc(db,"posts",id)
    await deleteDoc(postDoc)
    window.location.pathname = "/"
  }
  return (
    <>
      <div className="container" >
        <div className="row">
          {postsList.map((post) => {
            return (
              <div className="col-sm-6 mb-3 mb-sm-0 mb-3 mt-5">
                <div class="card">
                  <div class="card-header">{post.title}</div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        {post.post}
                      </p>
                      <footer class="blockquote-footer">
                        
                        <cite title="Source Title">{post.author.name}</cite>
                      </footer>
                    </blockquote>
                    {login && post.author.id === auth.currentUser.uid &&<button className="btn btn-outline-danger" onClick={()=>{deletePost(post.id)}}>&#128465;</button>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
