import logo from './logo.svg';
import {useState,useEffect} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
  document.title = 'HOME';
  const [recipes,setRecipes]=useState([])
  const [search,setSearch]=useState("")
  const [query,setQuery]=useState('pizza')
  

  useEffect(()=>{
    
    getRecipes();
  },[query])

  const getRecipes=async()=>{
                                //https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}
                              //https://api.edamam.com/api/recipes/v2?type=public&app_id=647f1f14&app_key=ca8e5c567e7b7aa6e76071843ace6641
    const res   =   await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=647f1f14&app_key=ca8e5c567e7b7aa6e76071843ace6641`)
    const data  =   await res.json()
    setRecipes(data.hits)
  }

  const refresh=event=>{
    setSearch(event.target.value);
  }

  const getSearch=event=>{
    event.preventDefault();
    setQuery(search)
    setSearch('')
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className='search-bar' type="text" value={search} onChange={ refresh}/>
        <button  className="search-button" type="submit">
              Search
        </button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe=>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}

        />
      ))}
      </div>
      

    </div>
  );
}

export default App;
