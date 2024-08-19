import "./App.css";
import Title from "./components/Title";
import Presentation from "./components/Presentation";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const App = () => {
  const name = "Tom";
  return (
    <>
      <h1
        style={{
          color: "red",
          backgroundColor: "green",
        }}
      >
        Bonjour
      </h1>
      <p onClick={() => {}} className="coucou">
        Coucou
      </p>
      <p>{name}</p>
      <Title text="Category" color="red" />
      <Title text="Profile" color="green" />
      <Presentation name="Henry" age={30} />
      <img src={reactLogo} alt="" />
      <img src={viteLogo} alt="" />
      <img
        src="https://www.cieletespace.fr/media/default/0001/25/A64_Artist_1100x700-6568.jpeg"
        alt=""
      />
    </>
  );
};

export default App;
