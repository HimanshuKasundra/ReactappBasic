import { useState } from "react";

const Form = () => {
  var [faculty, setFaculty] = useState(["avb", "vms"]);
  const [data, setData] = useState("");
  return (
    <>
      <form>
        <table className="m-5">
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>
              <input
                type="text"
                value={data}
                onChange={(e) => {
                  setData(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="submit"
                value="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setFaculty([...faculty, data]);
                  setData("");
                }}
              />
            </td>
          </tr>
        </table>
      </form>
      <ul>
        {faculty.map((fac) => {
          return <li>{fac}</li>;
        })}
      </ul>
    </>
  );
};

export default Form;
