import React from "react";
import "./Search.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as profileService from "../../services/profile";

const SearchBar = () => {
  const [query, setQuery] = useState([]);
  const [search, setSearch] = useState({ username: "" });
  const params = useParams();

  useEffect(() => {
    profileService.fetchUsers().then((response) => {
      setQuery(response.data);
    });
  }, []);

  return (
    <div className="App">
      {/* search-container */}
      <div className="search-container">
        {/* search-inner */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            className=""
          />
        </div>
        <div className="dropdown">
          <datalist id="adventure"></datalist>
          {query
            .filter((user) => {
              if (search === "") {
              } else if (
                user.username
                  .toString()
                  .toLowerCase()
                  .includes(search.toString().toLowerCase())
              ) {
                return user.username;
              }
            })
            .map((user) => {
              return (
                <div className="dropdown-row">
                  <Link
                    to={`/profile/${user.username}/posts`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="user">
                      <img className="imgS" src={user.imageUrl} alt="" />
                      {user.username}
                    </div>
                    <hr></hr>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
