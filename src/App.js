import React, { useEffect } from 'react';

import web3 from './web3';

function App() {
  useEffect(() => {
    (async () => {
      const accounts = await web3.eth.getAccounts();
      console.log('accounts====', accounts);
    })();
  });

  return <div>Solidity</div>;
}

export default App;
