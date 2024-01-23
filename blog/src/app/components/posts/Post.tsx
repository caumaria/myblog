import React from "react";

interface PostType {
  id: number;
  title: string;
  post_text: string;
  date: string;
}
interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <p>{post.id}</p>
      <h3>{post.title}</h3>
      <p>{post.post_text}</p>
      <p>{post.date}</p>
    </div>
  );
};

export default Post;
