export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"];

    /**
     * Challenge:
     * Add the new ingredient to the array of ingredients. Also, add a
     * console.log(ingredients) after adding the ingredient, because
     * **warning**: you aren't going to see the page update!
     *
     * Hint: this is a one-liner solution, so don't overthink it 😅
     */

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        ingredients.push(newIngredient);
        console.log(ingredients);
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
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
