export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"];

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
