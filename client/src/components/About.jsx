import React from 'react';
import { Box, VStack, theme, Button, Image, Stack, HStack } from '@chakra-ui/react';
import img4 from '../assets/homepage/bg.png';
import '../styles/about.css'
import img5 from '../assets/homepage/dubai3.png'

const About = () => {
  return (
    <div className="about" id="about">
    
        <h2>ABOUT US</h2>
        <p>
          Amet incididunt Lorem sunt cupidatat fugiat fugiat amet mollit laborum
          minim eiusmod. Veniam eu exercitation sunt voluptate consequat nisi
          dolore. Excepteur reprehenderit labore amet occaecat eu aliquip
          labore. Anim anim minim veniam eu fugiat. Irure sunt ullamco mollit
          ipsum ipsum officia exercitation veniam consequat anim dolore. Et
          adipisicing non labore dolore ea do do. Incididunt nisi laborum ipsum
          Lorem eu do proident sit excepteur fugiat incididunt ut. Voluptate
          enim irure ipsum et labore do enim Lorem qui aliquip officia esse
          ipsum. Quis elit consequat occaecat nostrud irure culpa dolore.
          Adipisicing reprehenderit consectetur est do nulla minim quis esse
          veniam. Aute labore dolore ipsum nulla laboris magna ea. Sit ea
          officia aliquip dolore eiusmod occaecat incididunt occaecat.
          Consectetur et qui est nisi fugiat adipisicing sint aliqua amet
          excepteur adipisicing. Excepteur ipsum in laborum nisi excepteur
          eiusmod eiusmod culpa eu. Dolore ea Lorem sint proident excepteur
          ullamco labore ex. Pariatur laboris ex duis sunt in cupidatat
          adipisicing adipisicing aliqua culpa mollit duis. Consectetur nisi
          incididunt id Lorem pariatur occaecat adipisicing adipisicing duis
          labore ex nulla voluptate sunt. Excepteur nostrud exercitation enim
          officia amet excepteur ullamco labore exercitation pariatur. Fugiat
          magna laborum dolor officia. Laboris ad quis cillum aliqua aliqua quis
          dolore. Ipsum velit aute dolor enim adipisicing magna culpa ipsum
          minim dolor elit velit ullamco. Culpa ex cillum non ut est. Minim nisi
          sint aliquip fugiat adipisicing. Excepteur pariatur incididunt non
          aliqua irure fugiat sunt aute. Ex deserunt cillum cupidatat ad. Eu non
          aute nostrud reprehenderit velit adipisicing ex culpa qui. Quis dolore
          tempor ipsum sint ex est aliquip ullamco. Adipisicing non eu dolore
          irure quis nostrud nostrud labore esse in anim esse.
        </p>
        <HStack mt='24'>
            <div>
                <h2>lorem ipsum</h2>
                <h4>Occaecat esse irure et occaecat tempor.</h4>
            </div>
            <div className='imgs'><Image src={img5} w='container.md'/>
            </div>
        </HStack>
        
    </div>
  );
};

export default About;
