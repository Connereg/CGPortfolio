import React from 'react'
import { Image, Item } from 'semantic-ui-react'

import './Blog.scss'

// import blogpic1 from '../assets/blog1.jpeg'
// import blogpic2 from '../assets/blog2.jpeg'
// import blogpic3 from '../assets/blog3.jpeg'

function BlogPostContainer(props) {
    const { id, author, title, pubDate, link, guid, thumbnail, content } = props;



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