import React from 'react';
import { drizzleConnect } from 'drizzle-react';
import { Flex, Box, Text, Heading } from 'rimble-ui';

const TokenDetails = ({ children }) => (
  <>
    <Flex alignItems={'center'} py={2}>
      <Box width={[1, 1 / 2, 7 / 12]}>
        <Heading.h4>MashUp Films</Heading.h4>
        <Text>
        MashUp Films dApp converts a creative NFT marketplace in a way <br />fans support community platforms and creators<br />
          <Text.span bold>A Binance X challenge at Gitcoin Grants Round 8 hackathon</Text.span>
        </Text>
        <Text>Released December 15th, 2020</Text>
        <Heading.h6>Image and Video attribution to Blender Cloud</Heading.h6>
        
      </Box>

      <Box py={3} width={[1, 1 / 2, 5 / 12]}>
        {' '}
        {children}
      </Box>
    </Flex>
  </>
);

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  };
};

export default drizzleConnect(TokenDetails, mapStateToProps);
