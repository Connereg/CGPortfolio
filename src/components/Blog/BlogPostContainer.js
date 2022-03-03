import React from 'react'
import { Item } from 'semantic-ui-react'

import './Blog.scss'


function BlogPostContainer(props) {
    const { author, title, pubDate, link, thumbnail } = props;



    return (
        <Item className="blog-post-item">
            <Item.Image size='medium' src={thumbnail} />
            <Item.Content>
                <Item.Header>{title}</Item.Header>
                <Item.Meta>
                    <span className="author">By: {author}</span>
                    <span className='pubDate'> Published: {pubDate}</span>
                </Item.Meta>
                <a href={link}>
                    <p className="link-to-article-btn" >Link To Article</p>
                </a>
            </Item.Content>
        </Item>

    )
    

}

export default BlogPostContainer;