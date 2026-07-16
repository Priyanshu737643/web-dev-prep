import C2 from "./C2";

const C1 = (props) => {
  return (
    <div>
      <span className="font-bold">Number: {props.num}</span>
      <C2 name={props.name} />
    </div>
  );
};

export default C1;
