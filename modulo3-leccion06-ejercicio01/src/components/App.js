import React, {useState} from 'react';
import Age from './Age';

const App = () => {
  const [age, setAge] = useState (20);

  const handleAge = () => {
    setAge (age + 1);
  };
  return (
    <div>
      <Age getAge={handleAge} age={age} />
    </div>
  );
};
export default App;
