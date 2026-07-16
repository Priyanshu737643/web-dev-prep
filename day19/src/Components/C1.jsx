import C2 from "./C2";

const C1 = (props) => {
  return (
    <div>
      <span className="font-bold">
        Number: {props.num}
        <C2 name={props.name} />
      </span>
    </div>
  );
};

export default C1;
