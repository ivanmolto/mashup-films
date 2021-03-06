import React from 'react';
import PropTypes from 'prop-types';
import { drizzleConnect } from 'drizzle-react';
import { ContractData, ContractForm } from 'drizzle-react-components';
import { Form, Text, Button, Heading } from 'rimble-ui';

const PurchaseForm = ({ accounts, drizzzleStatus }, { drizzle }) => {
  const { web3 } = drizzle;

  return (
    <ContractData
      contract="MashUpTraderApp"
      method="tokenPrice"
      render={tokenPrice =>
        tokenPrice <= web3.utils.toBN(0) ? (
          <>
            <Heading.h4 pb={3}>Buy</Heading.h4>
            <Text>Not currently for sale</Text>
          </>
        ) : (
          <>
            <Heading.h4 pb={3}>Buy</Heading.h4>
            <Text pb={4}>
              Current price is: {web3.utils.fromWei(tokenPrice, 'ether')} BNB
            </Text>
            <ContractForm
              contract="MashUpTraderApp"
              method="purchase"
              sendArgs={{ value: tokenPrice }}
              render={({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <Button
                    key="submit"
                    type="button"
                    onClick={handleSubmit}
                    size={'medium'}
                  >
                    Purchase
                  </Button>
                </Form>
              )}
            />
          </>
        )
      }
    />
  );
};

PurchaseForm.contextTypes = { drizzle: PropTypes.object };

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  };
};

export default drizzleConnect(PurchaseForm, mapStateToProps);
