import React, { useState, useEffect } from 'react';
import { Item } from 'semantic-ui-react';
import BlogPostContainer from './BlogPostContainer';

import './Blog.scss';

function Blog() {

    const [blogPosts, setBlogPosts] = useState([])


    useEffect(() => {
        console.log("Fetching Blog Posts...")
        fetchBlogPosts()
    }, [])

    function fetchBlogPosts() {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@darkadversaryaudio')
        .then(resp => resp.json())
        .then(blogs => setBlogPosts(blogs.items))
    }

    const blogPostCollection = blogPosts.map((post) => {
        return (
            <BlogPostContainer
                key={post.id}
                id={post.id}
                author={post.author}
                title={post.title}
                pubDate={post.pubDate}
                link={post.link}
                guid={post.guid}
                thumbnail={post.thumbnail}
                content={post.content}
            />
        )
    })

    return (
            <div id="blog-div" className="full-height">
                <h1 className="section-header"> Recent Blog Posts </h1>
                <h4 className="subsection-header">A collection of links to recent technical blog articles made by me on Medium.com</h4>
                <div className="blog-collec-div">
                    <Item.Group>
                        {blogPostCollection}
                    </Item.Group>   
                </div>           
            </div>
        
    )
}

export default Blog;