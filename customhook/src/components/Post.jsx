import { useState, useEffect } from 'react';
import useFetchData from '../hooks/useFetchData';

const Post = () => {
    const { data } = useFetchData("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;