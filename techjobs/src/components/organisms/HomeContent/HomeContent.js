import React from "react";
import "./homeContent.css";
import SearchBar from "../../molecules/searchBar/SearchBar";
import Card from "../../molecules/Card/Card";
import FilterBar from "../../molecules/FilterBar/FilterBar";
import MainTitle from '../../atoms/MainTitle/MainTitle';


const HomeContent = ({
  texto,
  onClick,
  type,
  placeholder,
  value,
  onChange,
  data,
  filters,
  handleFilters,
  titulo
}) => {
    return (
    <main className='homeContent--container'>
      {/* tem que botar a props desse componente como titulo, pq ja existe uma outra props com esse nome sendo usada */}
     <MainTitle texto={titulo}/> 
      <section>
        <div>
          {/* no JSX, o input é uma tag que se auto fecha */}
          <SearchBar
            texto={texto}
            onClick={onClick}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>

        <FilterBar filters={filters} onClick={handleFilters}/>
      </section>

      <section>
        {data.length ? (
          data.map((item, index) => {
            const {
              logo,
              company,
              position,
              postedAt,
              contract,
              location,
              languages,
              tools,
            } = item;
            return (
              <Card
                logo={logo}
                company={company}
                position={position}
                postedAt={postedAt}
                contract={contract}
                location={location}
                languages={languages}
                tools={tools}
                key = {`${index + 1}--card`}
              />
            );
          })
        ) : (
          <h2>Nenhuma vaga encontrada</h2>
        )}
      </section>
    </main>
  );
};

export default HomeContent;
