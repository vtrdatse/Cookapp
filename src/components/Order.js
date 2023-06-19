import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Other = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://cookappapisu23.azurewebsites.net/api/RecipePosts"
      );
      setPosts(data);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <div className="other-container">
      <h3>other</h3>
      <div className="other-flex">
        {posts.length === 0 ? (
          <p>loading...</p>
        ) : (
          posts.map((p) => (
            <div key={p.id}>
              <span>
                <b>{p.title}</b>
              </span>
              <span>{p.content}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Other;
