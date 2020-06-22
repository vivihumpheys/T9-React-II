import React from 'react';
import './homeContent.css';
import SearchBar from '../../molecules/searchBar/SearchBar';


const HomeContent = ({texto, onClick, type, placeholder, value, onChange }) => {
    return (
         
         <main>
         <h1>TechJobs</h1>
         <section>
           <div>
             {/* no JSX, o input é uma tag que se auto fecha */}
            <SearchBar texto={texto} 
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
           <h2>CARDS</h2>
         </section>
       </main>
    )
};

export default HomeContent;

