import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../confit/supabaseClient";
function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data, error } = await supabase
        .from("Recipe Maker")
        .select()
        .eq("id", id)
        .single();
      if (error) {
        navigate("/", { replace: true });
      }
      if (data) {
        setTitle(data.title);
        setDescription(data.title);
        setIngredients(data.ingredients);
        console.log(data);
      }
    };
    fetchRecipe();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !ingredients) {
      setFormError("Please fill in all the fields");
      return;
    }
    const { data, error } = await supabase
      .from("Recipe Maker")
      .update({ title, description, ingredients })
      .eq("id", id)
      .select();

    if (error) {
      setFormError("Please fill in all the fields");
    }
    if (data) {
      setFormError(null);
      navigate("/");
    }
  };
  return (
    <div className="update">
      <form onSubmit={handleSubmit}>
        <h1 className="inputTitle">Title</h1>
        <input
          className="titleInput"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <h1 className="inputDescription">Description</h1>
        <textarea
          className="descriptionInput"
          name="author"
          type="text"
          rows="5"
          cols="50"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <h1 className="ingredient">Ingredients</h1>
        <textarea
          className="ingredientInput"
          name="author"
          type="text"
          rows="5"
          cols="50"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
        <button className="updateButton">Update</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}

export default Update;
