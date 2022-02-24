import React from 'react'
import { Header, Image, Modal, Card } from 'semantic-ui-react'

import SwappPic from '../assets/SwappPic.png';

function StarLoveModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Card id="star-love-project" className="project-card">
                    <Image src={SwappPic}/>
                    <Card.Content header="Star Love App" />
                </Card>}
    >
      <Modal.Header>MTG Lockbox App</Modal.Header>
        <Image src={SwappPic} />
        <Card.Content>
        <Modal.Description className="project-modal">
            <Header> Star Love App Description: </Header>
            <p>The Star Love App was created to allow users to create biographic cards for any Star Wars character,</p>
            <p>The user simply uses the built in character search function to find existing characters from the public SWAPI database</p>
            <p>The user can provide a picture for the card, but the character details are automatically retreived and filled.</p>
            <p>Users can then ineract with eachothers cards, favoriting and commenting cards as they like</p>
            <p>Created with Javascript</p>
        </Modal.Description>
        </Card.Content>
    </Modal>
  )
}

export default StarLoveModal;