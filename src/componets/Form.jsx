import React from 'react'

const Form = ({handleSearch, searchQuery, setSearchQuery}) => {
  return (
    <form onSubmit={handleSearch} className="pl-4 w-fit grid grid-cols-2">
        <input
          type="text"
          placeholder="Search for movies..."
          className="border border-red-400 rounded-l-full pl-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="bg-red-400 py-2 px-4 rounded-r-full ">
          Search
        </button>
      </form>
  )
}

export default Form