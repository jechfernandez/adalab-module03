import React from "react";
function App() {
  const users = [
    { name: "Nymphadora Tonks", time: 9 },
    { name: "Cedric Diggory", time: 28 },
    { name: "Cho Chang", time: 35 },
    { name: "Luna Lovegood", time: 45 },
    { name: "Gregory Goyle", time: 56 },
  ];
  const [x, y, z] = users;
  return (<>
      <p>
        The third classified is {z.name} with a time of {z.time}
      </p>
      <p>
        The second classified is {y.name} with a time of {y.time}
      </p>
      <p>
        And the last but not the least is our WINNER, the first classified:{" "}
        {x.name} with a time of {x.time}
      </p>
    </>
  );
}
export default App;
