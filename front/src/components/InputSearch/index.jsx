import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function InputSearch({setFilters, filters}) {
  const onSearch = (e) => {
    e.preventDefault();
    setFilters({
      ...filters,
      search: e.target.value
    });
  };

  return (
    <div className="w-80">
      <form onChange={onSearch}>
        <div className="bg-gray-100 rounded-full p-1 border border-gray-300 flex items-center">
          <label className="ml-2">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </label>
          <input
            type="text"
            name="search"
            className="outline-none bg-transparent p-1 ml-2 flex-grow"
            onChange={onSearch}
            placeholder="Buscar"
          />
        </div>
      </form>
    </div>
  );
}
