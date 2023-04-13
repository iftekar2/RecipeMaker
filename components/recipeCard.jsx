import "./styleCard.css";
import { Link } from "react-router-dom";
import supabase from "../confit/supabaseClient";

function RecipeCard({ recipe, onDelete }) {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("Recipe Maker")
      .delete()
      .eq("id", recipe.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(recipe.id);
    }
  };
  return (
    <div className="recipeCard">
      <div className="recipe">
        <h2 className="title">{recipe.title}</h2>
        <p className="description">{recipe.description}</p>
        <p className="ingredients">{recipe.ingredients}</p>
      </div>
      <div className="editDelit">
        <Link to={"/" + recipe.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>
          delete
        </i>
      </div>
    </div>
  );
}

export default RecipeCard;
