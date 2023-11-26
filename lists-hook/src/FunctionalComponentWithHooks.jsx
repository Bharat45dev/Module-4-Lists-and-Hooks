import React, { useState, useEffect } from 'react';

const FunctionalLifecycleExample = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log('Mounting');

    
    return () => {
      console.log('Unmounting');
    };
  }, []);

  const handleChange = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log('Component Did Update');
  }, [count]);

  return (
    <>
      <h1>LifeCycle Example With funactional component</h1>
      <h1>{count}</h1>
      <button onClick={handleChange}>Increment</button>
    </>
  );
};

export default FunctionalLifecycleExample;
