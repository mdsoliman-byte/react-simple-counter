import React from 'react';
import Counter from './Component/Counter';

const App = () => {

  return (
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">

      <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>


      <div class="max-w-md mx-auto mt-10 space-y-5 flex gap-10 justify-center">
        <Counter data={1} />
        <Counter data={2} />
        <Counter data={10} />
      </div>
    </div>
  );
};

export default App;