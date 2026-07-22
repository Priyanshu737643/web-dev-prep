import { useOutletContext } from "react-router-dom";
const Contact = () => {
  const { name, phNo } = useOutletContext();
  return (
    <>
      <h1>This is Contact Page</h1>
      <h1>Please Contact, {name}</h1>
      <h1>Mobile No: {phNo}</h1>
    </>
  );
};

export default Contact;
