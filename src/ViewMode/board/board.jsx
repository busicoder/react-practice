import React from 'react'

const Board = ({ posts }) => {
  return (
    <div className="board">
      {posts.map((post) => (
        <div
          key={post.id}
          className="card"
        >
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Board