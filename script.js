/*function getDrink(){
  let drink = document.querySelector('input').value
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.drinks[0])
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[0].strInstructions
      document.querySelector('#firstIng').innerText = data.drinks[0].strIngredient1
      document.querySelector('#secondIng').innerText = data.drinks[0].strIngredient2
      document.querySelector('#thirdIng').innerText = data.drinks[0].strIngredient3
      document.querySelector('#fourthIng').innerText = data.drinks[0].strIngredient4
  })
  .catch(err => {
    console.log(`error ${err}`)
  });

  
}*/

const drinkButton = document.querySelector('button')
drinkButton.addEventListener('click', getDrink)

async function getDrink(){
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
  
  try{
    const drink = document.querySelector('input').value
    const res = await fetch(`${url}${drink}`)
    const data = await res.json()
    
    //creating drink variables//
    
    const nameOfDrink = document.querySelector('h2')
    const pictureOfDrink = document.querySelector('img')
    const drinkInstruction = document.querySelector('h3')
    const firstIng = document.querySelector('#firstIng')
    const secondIng = document.querySelector('#secondIng')
    const thirdIng = document.querySelector('#thirdIng')
    const fourthIng = document.querySelector('#fourthIng')
    
    console.log(data)
    //console.log(url`${drink}`)
    
    //DRY Method//
    
    nameOfDrink.textContent = data.drinks[0].strDrink
    pictureOfDrink.src = data.drinks[0].strDrinkThumb
    drinkInstruction.textContent = data.drinks[0].strInstructions
    firstIng.textContent = data.drinks[0].strIngredient1
    secondIng.textContent = data.drinks[0].strIngredient2
    thirdIng.textContent = data.drinks[0].strIngredient3
  //conditional statement//
    //standard if//
    /*if(!fourthIng){
      fourthIng.addClasslist.add(".removeNoIng")
    }else{
      fourthIng.textContent = data.drinks[0].strIngredient4
    }*/
      
    //tenary operator//
   !fourthIng ? fourthIng.addClasslist.add(".removeNoIng") : fourthIng.textContent = data.drinks[0].strIngredient4
    
  }catch(err){
    console.log(err)
  }
}
//getDrink()

