

let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  GiveRating(props)
  return stars;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
