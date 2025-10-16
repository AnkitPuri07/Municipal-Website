import React, { useState } from 'react';
import Employee from '../Employee/Employee';
import leaders from '../../LeadersInfo/LeadersInfo';

function EmployeeSection() {
  const [region, setRegion] = useState('municipality');
  const [visibleEmployee,setVisibleEmployee]=useState(4);

  function changeRegion(e) {
    setRegion(e.target.value);
  }

  // Always filter by the selected region (case-insensitive)
  const filteredLeaders = leaders.filter(
    (leader) => (leader.region || '').toLowerCase() === region.toLowerCase()
  );
    let num=filteredLeaders.length;
  function showAll(){
     setVisibleEmployee(num);
  }

  function showLess(){
    setVisibleEmployee(4);
  }

  function buttonClick(){
    if(visibleEmployee < num){
      showAll();
      document.querySelector('.bttn').innerHTML="SHOW LESS";
    }
    else{
      showLess();
       document.querySelector('.bttn').innerHTML="SHOW MORE";
    }
  }

  return (
    <>
      <div className="flex justify-center mb-6">
        <select
          className="border border-white rounded-lg text-white bg-blue-700 p-2"
          onChange={changeRegion}
          value={region}
        >
          <option value="municipality">Municipality</option>
          <option value="ward1">Ward 1</option>
          <option value="ward2">Ward 2</option>
          <option value="ward3">Ward 3</option>
          <option value="ward4">Ward 4</option>
          <option value="ward5">Ward 5</option>
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredLeaders.splice(0,visibleEmployee).map((L) => (
          <Employee
            key={L.id}
            name={L.name}
            position={L.position}
            image={L.image}
          />
        ))}
      </div>
      <div className='flex flex-wrap justify-center items-center m-4 p-4'>
      <button onClick={buttonClick}
  className=" bttn px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r 
  from-blue-500 to-indigo-600 text-white font-semibold rounded-full
   shadow-lg hover:from-indigo-600 hover:to-blue-500 hover:scale-105 
   transition-all duration-300 ease-in-out text-sm md:text-base">
  SHOW MORE
</button>
      </div>
    </>
  );
}

export default EmployeeSection;
