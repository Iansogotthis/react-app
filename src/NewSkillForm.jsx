import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function NewSkillForm({ setSkills }) {
  const initialFormData = { name: '', level: 3 };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSkills(prevSkills => [...prevSkills, formData]);
    setFormData(initialFormData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="skillName">
          Skill:
          <input type="text" id="skillName" name="name" value={formData.name} onChange={handleChange} autoComplete="name" />
        </label>

        <label htmlFor="skillLevel">Level:</label>
        <select id="skillLevel" name="level" value={formData.level} onChange={handleChange} autoComplete="level">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
}

NewSkillForm.propTypes = {
  setSkills: PropTypes.func.isRequired,
};