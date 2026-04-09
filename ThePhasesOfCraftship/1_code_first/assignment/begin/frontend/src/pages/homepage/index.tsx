"use server";
import "@/App.css";

import PostItems from "./PostItems";
import Header from "@/components/Header";
import { useState } from "react";

function HomePage() {
  const [postsOrder, setPostsOrder] = useState("popular-posts");
  return (
    <div>
      <Header />

      <div className="content-container">
        <div className="posts-view-switcher flex">
          <div
            className="active"
            onClick={() => setPostsOrder("popular-posts")}
          >
            Popular
          </div>
          <div className="active" onClick={() => setPostsOrder("new-posts")}>
            New
          </div>
        </div>

        <PostItems postsOrder={postsOrder} />
      </div>
    </div>
  );
}

export default HomePage;
