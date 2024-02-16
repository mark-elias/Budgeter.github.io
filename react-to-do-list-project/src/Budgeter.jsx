import { useState } from "react";

function Budgeter() {
  // for array of objects
  const [bills, setBills] = useState([]);
  // bill name
  const [name, setName] = useState("");
  // bill cost
  const [cost, setCost] = useState();
  // bille date
  const [date, setDate] = useState();

  function handleAdd() {
    //create new object with values from input fields
    const newBill = {
      name: name,
      cost: cost,
      date: date,
    };

    // make new bills Array of Objects with new object
    setBills((b) => [...b, newBill]);

    // reset input fields
    setName("");
    setCost("");
    setDate("");
  }
  function handleRemove(index) {
    console.log("removing");
  }
  function sortByCost() {
    const sortedByCost = [...bills].sort((a, b) => a.cost - b.cost);
    setBills(sortedByCost);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleCostChange(event) {
    setCost(event.target.value);
  }
  function handleDateChange(event) {
    setDate(event.target.value);
  }

  return (
    <main className="p-5 md:mx-40 lg:mx-64 xl:mx-96 ">
      <h1 className="text-4xl font-black my-10">Budgeter</h1>
      <div className="input-container">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="enter Name of bill"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full my-1"
        ></input>
        <input
          type="number"
          value={cost}
          onChange={handleCostChange}
          placeholder="enter Cost of bill"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full my-1"
        ></input>
        <input
          type="number"
          value={date}
          onChange={handleDateChange}
          placeholder="enter Date of bill"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full my-1"
        ></input>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 my-1"
          onClick={handleAdd}
        >
          Add Bill
        </button>
      </div>
      <div id="tabs">
        <h2>tab row</h2>
        <button className="bg-blue-400 p-3" onClick={sortByCost}>
          clck to sort
        </button>
      </div>
      <div id="bills-container">
        <ul>
          {bills.map((element, index) => (
            <li key={index} className="bg-slate-200 p-2 rounded my-2">
              {element.name} ${element.cost} Due Date: {element.date}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Budgeter;
