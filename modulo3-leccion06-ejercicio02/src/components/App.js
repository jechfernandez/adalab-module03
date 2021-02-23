import React, {useState} from 'react';
import Age from './Age';

const App = () => {
  const [age, setAge] = useState (20);
  const [gift, setGift] = useState (1);

  const handleAge = () => {
    setAge (age + 1);
  };

  const handleGift = () => {
    setGift (gift + 1);
  };

  return (
    <div>
      <Age getAge={handleAge} age={age} getGift={handleGift} gift={gift} />
    </div>
  );
};
export default App;
