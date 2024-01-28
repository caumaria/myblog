import React from "react";
import { PostContainer } from "./PostsStyle";

interface PostType {
  id: number;
  title: string;
  post_text: string;
}
interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <PostContainer>
      <div>
        <h3>{post.title}</h3>
        <p>{post.post_text}</p>
      </div>
    </PostContainer>
  );
};

export default Post;
