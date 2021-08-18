import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import FooterIcons from './footerIcons';

function Footer() {
  return (
    <Box
      marginTop={{
        xs: '50px',
        md: '100px',
      }}
      marginBottom="20px"
      textAlign="center"
      display="flex"
      justifyContent={{
        xs: 'center',
        md: 'space-between',
      }}
      alignItems="center"
    >
      <Text href="https://github.com/carolandrade1" target="_blank" rel="noopener noreferrer" tag="a" variant="paragraph3" color="fonts.main" textAlign="center">
        ©
        {new Date().getFullYear()}
        {' '}
        - Carol
      </Text>
      <FooterIcons />
    </Box>
  );
}

export default Footer;
