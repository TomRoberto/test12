const Presentation = (props) => {
  console.log(props);

  return (
    <p>
      Je m'appelle {props.name} et j'ai {props.age} ans
    </p>
  );
};

export default Presentation;
