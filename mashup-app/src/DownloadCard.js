import React from 'react';
import { drizzleConnect } from 'drizzle-react';
import { Heading, Link, Text, Card, Box } from 'rimble-ui';

const DownloadCard = ({ accounts, drizzzleStatus, ...props }) => {
  return (
    <Box {...props}>
      <Card height={'100%'}>
        <Heading.h4 pb={1}>Download</Heading.h4>
        <Text>
          You are a community member and can{' '}
          <Link
            fontSize={'inherit'}
            href="https://arweave.net/-WCGpORECOYkC1SVecdvlXAWGy1GhplhVacS0clIROo"
            title="Download Video"
            download="sintel.mp4"
          >
            download
          </Link>{' '}
          the mashup film
        </Text>
      </Card>
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  };
};

export default drizzleConnect(DownloadCard, mapStateToProps);
