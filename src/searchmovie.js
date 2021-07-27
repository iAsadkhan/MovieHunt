import React ,{useState} from 'react'
import Moviecard from './moviecard';

function Searchmovie() {

    const [query,setquery] =useState("");
    const [movie,setmovie] =useState([]);
    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=56b96d0e9c8966842dfc6208ec5d4d6d&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setmovie(data.results);
        }catch(err){
            console.error(err);
        }
    }
    console.log(query)            
    console.log(movie)
    return (
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" 
                type="text" 
                name="query" 
                placeholder="search"
                onChange={e=>setquery(e.target.value)}/>
                <button type="submit" className="button">
                    search
                </button>
            </form>

            <div className="card-list">
                {movie.filter(movie => movie.poster_path).map(movie => (
                    <Moviecard movie={movie} key={movie.id}/>
                ))}
        </div>
        </div>
    )
}

export default Searchmovie
