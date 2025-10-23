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

            <ul>
                {ingredients.map((ingredient) => (
                    <li key={ingredient}> {ingredient} </li>
                ))}
            </ul>
        </main>
    );
}
