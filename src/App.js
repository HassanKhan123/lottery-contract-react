import React, { useEffect, useState } from 'react';

import web3 from './web3';
import lottery from './lottery';

function App() {
  const [manager, setManager] = useState('');
  useEffect(() => {
    (async () => {
      const accounts = await web3.eth.getAccounts();
      console.log('accounts====', accounts);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const manager = await lottery.methods.manager().call();
      setManager(manager);
    })();
  }, []);

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>This contract is managed by {manager} </p>
    </div>
  );
}

export default App;
