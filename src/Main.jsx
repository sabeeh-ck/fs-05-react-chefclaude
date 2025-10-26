import React from "react";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient");
        setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
    };

    return (
        <main>
            <form action={addIngredient}>
                <input type="text" aria-label="Add ingredient" placeholder="e.g. oregano" name="ingredient" />
                <button>+ Add ingredient</button>
            </form>
            {ingredients.length > 0 ? (
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul>
                        {ingredients.map((ingredient) => (
                            <li key={ingredient}> {ingredient} </li>
                        ))}
                    </ul>
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button>Get a recipe</button>
                    </div>
                </section>
            ) : null}
        </main>
    );
}
