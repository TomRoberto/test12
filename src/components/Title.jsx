const Title = (props) => {
  console.log(props);

  return (
    <h2
      className={props.color}
      // style={{
      //   color: props.color,
      // }}
    >
      {props.text}
    </h2>
  );
};

export default Title;
