import React from 'react'
import { Image, Item } from 'semantic-ui-react'

// import blogpic1 from '../assets/blog1.jpeg'
// import blogpic2 from '../assets/blog2.jpeg'
// import blogpic3 from '../assets/blog3.jpeg'

function BlogPostContainer(props) {
    const { id, author, title, pubDate, link, guid, thumbnail, content } = props;



    return (
        <Item>
            <Item.Image size='medium' src={thumbnail} />

            <Item.Content>
                <Item.Header>{title}</Item.Header>
                <Item.Meta>
                    <span className="author">By: {author}</span>
                    <span className='pubDate'> Published: {pubDate}</span>
                    <a className='link' href={link}>Link to Article</a>
                </Item.Meta>
                <Item.Description>{content}</Item.Description>
            </Item.Content>
        </Item>

    )
    

}

export default BlogPostContainer;