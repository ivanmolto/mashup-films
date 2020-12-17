import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rimble-ui';

/**
 * Renders the Logo
 *
 * @param {Object} props - react props
 * @returns {React.Element} 
 */
const Logo = ({ ...props }) => (
  <Box {...props}>
    <img src="https://arweave.net/S44FO8owYXrO1lGLXKqmsIwpc9WTCb_f9Q107LMpy88" alt="MashUp Films"/>
  </Box>
);

Logo.propTypes = {
  color: PropTypes.string
};

export default Logo;
