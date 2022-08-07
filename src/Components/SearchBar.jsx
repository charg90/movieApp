import React from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    if (keyword.length < 4) {
      swal("Tienes que escribir una palabra");
    } else if (keyword.length < 4) {
      swal("Tienes que escribir mas de 4 caracteres");
    } else {
      e.currentTarget.keyword.value = "";
      navigate(`/movie/${keyword}`);
    }
  };
  return (
    <>
      <form className="form-inline d-flex mx-5" onSubmit={submitHandler}>
        <input
          className="form-control mr-sm-2 bg-white"
          type="search"
          placeholder="Search "
          aria-label="Search"
          name="keyword"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0 text-white mx-2 "
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
