"use client"
import { useState, useEffect } from 'react';

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return {
    props: {
      posts: data
    }
  };
}

export default function Home({ posts }) {
  const [postList, setPostList] = useState(posts);

  useEffect(() => {
    setPostList(posts);
  }, [posts]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px' }}>Data fetching using Server Side Rendering</h1>
      <div>
        {postList.map(post => (
          <div key={post.id} style={{ border: '1px solid white', borderRadius: '5px', marginBottom: '10px', padding: '10px', backgroundColor: 'black' }}>
            <h2 style={{ fontSize: '1.5em', fontWeight: '600', marginBottom: '10px', color: 'lightblue' }}>{post.title}</h2>
            <hr style={{ marginBottom: '10px' }} />
            <p style={{ color: 'gray', margin: '5px 0' }}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
