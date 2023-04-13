import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../confit/supabaseClient";

function Create() {
  const nevigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !ingredients) {
      setFormError("Please fill in all the fields");
      return;
    }
    const { data, error } = await supabase
      .from("Recipe Maker")
      .insert([{ title, description, ingredients }])
      .select();

    if (error) {
      console.log(error);
      setFormError("Plese fill in the form correctly");
    }
    if (data) {
      console.log(data);
      setFormError(null);
      nevigate("/");
    }
  };
  return (
    <div className="Create">
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
        <button className="submitButton">Submit</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}

export default Create;
