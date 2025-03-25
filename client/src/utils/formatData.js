export default function formatData(formData) {

    const recipeData = {
        ...formData,
        prepTime: Number(formData.prepTime),
        cookTime: Number(formData.cookTime),
        ingredients: formData.ingredients.split(/,(?=[0-9])/),
        steps: formData.steps.split(/,(?=[A-Z])/),
    }

    return recipeData;
}