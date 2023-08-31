import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function InputSearch() {
  const onSearch = (e) => {
    e.preventDefault();
    // Realizar la búsqueda aquí
  };

  return (
    <div className="w-80">
      <form onSubmit={onSearch}>
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
