import React from "react";
import "./homeContent.css";
import SearchBar from "../../molecules/searchBar/SearchBar";
import Card from "../../molecules/Card/Card";

const HomeContent = ({
  texto,
  onClick,
  type,
  placeholder,
  value,
  onChange,
  data,
}) => {
  return (
    <main>
      <h1>TechJobs</h1>
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

        <div>
          <h2>FILTROS</h2>
        </div>
      </section>

      <section>
        {data ? (
          data.map((item) => {
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
