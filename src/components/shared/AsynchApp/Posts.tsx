import React from 'react'

export const Posts = ({ posts }: any): any => (
  <ul>
    {posts.map((post: any, i: any) => (
      <li key={i}>{post.title}</li>
    ))}
  </ul>
)
