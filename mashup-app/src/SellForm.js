import React from 'react';
import PropTypes from 'prop-types';
import { drizzleConnect } from 'drizzle-react';
import { ContractForm, ContractData } from 'drizzle-react-components';
import { Form, Button, Input, Heading, Flex, Text } from 'rimble-ui';

const SellForm = ({ accounts }, { drizzle }) => {
  const { web3, contracts } = drizzle;

  const handleSetTokenPriceSubmit = (inputs, state) => event => {
    event.preventDefault();

    const convertedInputs = inputs.map(input => {
      if (input.type === 'bytes32') {
        return web3.utils.toHex(state[input.name]);
      }
      if (input.name === 'newPrice') {
        return web3.utils.toWei(state[input.name], 'ether');
      }
      return state[input.name];
    });
    return contracts.MashUpTraderApp.methods.setTokenPrice.cacheSend(
      ...convertedInputs
    );
  };

  return (
    <>
      <Heading.h4 pb={3}>Sell</Heading.h4>
      <ContractData
        contract="MashUpTraderApp"
        method="tokenPrice"
        render={tokenPrice =>
          tokenPrice <= web3.utils.toBN(0) ? (
            <>
              <Text pb={3}>
                This MashUp Film isn't for sale, set a price below to list it
              </Text>
            </>
          ) : (
            <Heading.h5>
              Current price is: {web3.utils.fromWei(tokenPrice, 'ether')} BNB
            </Heading.h5>
          )
        }
      />
      <ContractForm
        contract="MashUpTraderApp"
        method="setTokenPrice"
        render={({ inputs, inputTypes, state, handleInputChange }) => (
          <Form onSubmit={handleSetTokenPriceSubmit(inputs, state)}>
            <Flex alignItems="center">
              {inputs.map((input, index) => (
                <Input
                  key={input.name}
                  type={inputTypes[index]}
                  name={input.name}
                  value={state[input.name]}
                  placeholder="List price in BNB"
                  onChange={handleInputChange}
                />
              ))}
              <Button
                ml={3}
                key="submit"
                type="button"
                onClick={handleSetTokenPriceSubmit(inputs, state)}
                size={'medium'}
              >
                Set MashUp Price
              </Button>
            </Flex>
          </Form>
        )}
      />
    </>
  );
};

SellForm.contextTypes = { drizzle: PropTypes.object };

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  };
};

export default drizzleConnect(SellForm, mapStateToProps);
