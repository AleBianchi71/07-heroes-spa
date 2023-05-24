import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.prevenDefault();

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Busqueda</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Busqueda</h4>
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Busca un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-warning mt-1">Buscar</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" ? (
            <div
              className="alert alert-warning animate__animated animate__fadeIn"
              style={{ display: showSearch ? "" : "none" }}
            >
              Buscando un heroe
            </div>
          ) : (
            heroes.lengh === 0 && (
              <div
                className="alert alert-danger animate__animated animate__fadeIn"
                style={{ display: showError ? "" : "none" }}
              >
                No se encontro ningun heroe con el nombre <b>{q}</b>
              </div>
            )
          )}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
