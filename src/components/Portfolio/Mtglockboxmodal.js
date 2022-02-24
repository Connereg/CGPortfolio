import React from 'react'
import { Header, Image, Modal, Card } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel';

import MTGLockboxhome from '../assets/MTGLockboxhome.png';
import CustomPreview from '../assets/CustomPreview.png';
import CardSearch from '../assets/CardSearch.png';
import CardProfile from '../assets/CardProfile.png';

function Mtglockboxmodal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Card id="Mtglockbox-project" className="project-card">
                    <Image src={MTGLockboxhome}/>
                    <Card.Content header="MTG Lockbox App" />
                </Card>}
    >
      <Modal.Header>MTG Lockbox App</Modal.Header>
        <Carousel autoPlay={true} infiniteLoop stopOnHover>
            <div>
                <Image src={MTGLockboxhome} />
                <p className="legend">MTG Lockbox Landing Page</p>
            </div>
            <div>
                <Image src={CustomPreview} />
                <p className="legend">Custom Card Generator and Preview Feature</p>
            </div>
            <div>
                <Image src={CardSearch} />
                <p className="legend">Custom Card Search by Card Name Feature</p>
            </div>
            <div>
                <Image src={CardProfile} />
                <p className="legend">Custom Card Profile Page</p>
            </div>
        </Carousel>
        <Card.Content>
        <Modal.Description className="project-modal">
            <Header> MTG Lockbox Description: </Header>
            <p>The MTG Lockbox App allows users to create custom Magic the Gathering cards, post those cards to the app,</p>
            <p> search for custom cards by name or creator, and comment on custom cards with a profile name and password!</p>
            <p>Created with React</p>
        </Modal.Description>
        </Card.Content>
    </Modal>
  )
}

export default Mtglockboxmodal;