import { useEffect, useState } from "react";
import type { PostType } from "@/types/postTypes";
import PostItem from "./PostItem";
import { backendApi } from "@/lib/backendApi";

function PostItems({ postsOrder }: { postsOrder: string }) {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    async function getPosts() {
      if (postsOrder === "popular-posts") {
        setPosts((await backendApi.posts.getPopular(10)).data);
      } else if (postsOrder === "new-posts") {
        setPosts((await backendApi.posts.getPopular(10)).data);
        console.log(posts);
      }
    }
    getPosts();
  }, [postsOrder]);

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostItems;
