import React, { useEffect, useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-configuration";

const Post = ({login}) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const postReference = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postReference, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    window.location.pathname = "/"
  };
  useEffect(()=>{
   if(!login){
    window.location.pathname = "/login"
   }
  },[])
  return (
    <>
      <div className="container " style={{ marginRight: 50 }}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-sm-12 col-lg-9 ">
            <div
              className="card m-5 shadow-lg "
              style={{ borderRadius: "1rem", maxWidth: "600px" }}
            >
              <div className="card-body px-5 ">
                <h2 className="text-uppercase text-center mb-5">
                  Create a Post
                </h2>
                <form className="lg-shadow rounded">
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form4Example1"
                      class="form-control"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <label class="form-label" for="form4Example1">
                      Title
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <textarea
                      class="form-control"
                      id="form4Example3"
                      rows="4"
                      onChange={(e) => {
                        setPost(e.target.value);
                      }}
                    ></textarea>
                    <label class="form-label" for="form4Example1">
                      Description
                    </label>
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary btn-block mb-4"
                    onClick={createPost}
                  >
                    POST
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
