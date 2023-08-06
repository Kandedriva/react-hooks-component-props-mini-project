import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList(){
    const posts = blogData.posts;
    // console.log(posts);
    
return (<main>
    {posts.map(post =>(
        <Article 
        key={post.id} 
        
        title = {post.title}
      date = {post.date}
      preview = {post.preview}
      readingTime = { post.minutes }
      
        />
    ))}
</main>)
}
export default ArticleList;