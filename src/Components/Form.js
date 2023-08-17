import React, { useState } from 'react';
// import Star from './Star';
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

const Form = () => {
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('male');
  const [hobbies, setHobbies] = useState([]);
  const [rating, setRating] = useState(1);
  const [subscribeEmail, setSubscribeEmail] = useState('');

  const [formValid, setFormValid] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    validateForm();
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    validateForm();
  };

  const handleHobbyChange = (e) => {
    const hobby = e.target.value;
    if (hobbies.includes(hobby)) {
      setHobbies(hobbies.filter(item => item !== hobby));
    } else {
      setHobbies([...hobbies, hobby]);
    }
    validateForm();
  };

  const handleRatingChange = (value) => {
    setRating(value);
    validateForm();
  };

  const handleSubscribeEmailChange = (e) => {
    setSubscribeEmail(e.target.value);
    validateForm();
  };

  const validateForm = () => {
    if (
      email &&
      name &&
      hobbies.length > 0 &&
      rating   &&
      subscribeEmail
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValid) {
      alert('Please fill out all fields correctly.');
      return;
    }

    const formData = {
      email,
      name,
      gender,
      hobbies,
      rating,
      subscribeEmail,
    };

    // Store data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    alert('Form submitted successfully!');
    
  };

  return (
    <div style={{ width: 500 }}>
      <form onSubmit={handleSubmit}>

        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            id="exampleInputName"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={gender === 'male'}
              onChange={handleGenderChange}
              required
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={gender === 'female'}
              onChange={handleGenderChange}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Hobbies</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="hobby1"
              value="cricket"
              checked={hobbies.includes('cricket')}
              onChange={handleHobbyChange}
              required
            />
            <label className="form-check-label" htmlFor="hobby1">
              Cricket
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="hobby2"
              value="programming"
              checked={hobbies.includes('programming')}
              onChange={handleHobbyChange}
              required
            />
            <label className="form-check-label" htmlFor="hobby2">
              Programming
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="hobby3"
              value="traveling"
              checked={hobbies.includes('traveling')}
              onChange={handleHobbyChange}
              required
            />
            <label className="form-check-label" htmlFor="hobby3">
              Traveling
            </label>
          </div>
        </div>
        <div style={styles.container}>
      <h2> Rating </h2>
      <div style={styles.stars} onChange={handleRatingChange}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      
      
    </div>

        <div className="mb-3">
          <label htmlFor="subscribeEmail" className="form-label">
            Subscribe to our Newsletter
          </label>
          <input
            type="email"
            className="form-control"
            id="subscribeEmail"
            aria-describedby="emailHelp"
            value={subscribeEmail}
            onChange={handleSubscribeEmailChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!formValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <div className="container mt-5">
      <h1>Form with Validation</h1>
      <Form />
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
 
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};
export default App;
