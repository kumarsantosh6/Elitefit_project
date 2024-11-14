import React from 'react';

const SearchFilter = ({ setSearchTerm, setFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
        <option value="upcoming">Upcoming</option>
        <option value="overdue">Overdue</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default SearchFilter;
