import React, { useState } from 'react';
import Form from './Components/Form';

const DropdownForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    setShowForm(selectedValue === 'showFormOption');

  };

  return (
    <div>
    <select className="form-select" aria-label="Default select example" style={{width:500 , }} value={selectedOption} onChange={handleOptionChange}>
  <option selected>Open this select menu</option>
  <option value="showFormOption">Engineer</option>
</select>

      {showForm && (
          <Form />
      )}
    </div>
  );
};

export default DropdownForm;
