import "./style.css";
import supabase from "../confit/supabaseClient";
import { useState, useEffect } from "react";
import RecipeCard from "../components/recipeCard";
import { Link } from "react-router-dom";

function Home() {
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState(null);

  const handleDelete = (id) => {
    setRecipe((preRecipe) => {
      return preRecipe.filter((re) => re.id !== id);
    });
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data, error } = await supabase.from("Recipe Maker").select();

      if (error) {
        setError("Could not fetch Recipe");
        setRecipe(null);
        console.log(error);
      }

      if (data) {
        setRecipe(data);
        setError(null);
      }
    };
    fetchRecipe();
  }, []);
  return (
    <div className="Home">
      <h1 className="title">Recipe Maker</h1>
      <div children="newRecipeButton">
        <Link to="create">
          <button className="newRecipe">New Recipe</button>
        </Link>
      </div>

      {error && <p>{error}</p>}
      {recipe && (
        <div className="recipeGrid">
          {recipe.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
