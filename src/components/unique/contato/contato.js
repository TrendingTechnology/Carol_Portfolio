import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import Button from '../../common/button/button';
import RedesSociais from './style';
import FormCadastro from '../../forms/formCadastro';
import Modal from '../../common/modal/modal';

function Contato() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={{
        xs: 'space-around',
        md: 'space-around',
      }}
      height="70vh"
      padding={{
        xs: '0px',
        md: '40px',
      }}
      textAlign="center"
    >
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          <FormCadastro propsDoModal={propsDoModal} setModalState={setModalState} />
        )}
      </Modal>
      <Text tag="p" id="contato" variant="titleXS">
        Vamos_
        <Button
          ghost
          onClick={() => {
            setModalState(!isModalOpen); // novo state sendo atribuido
          }}
        >
          <Text className="spanContato" tag="span" variant="titleXS">conversar?</Text>
        </Button>
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={{
          xs: 'justify',
          md: 'space-between',
        }}
      >
        <Text tag="p" variant="paragraph3">Redes Sociais</Text>
        <RedesSociais>
          <Text
            tag="a"
            href="#"
            variant="paragraph1"
            target="_blank"
            rel="noopener noreferrer"
            title="Likedin"
          >
            Linkedin
          </Text>
          <Text
            tag="a"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            Github
          </Text>
          <Text
            tag="a"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            title="Codepen"
          >
            Codepen
          </Text>
        </RedesSociais>
      </Box>
    </Box>
  );
}

export default Contato;