import React, { useContext, useEffect } from "react"
import { IngredientContext } from "./IngredientProvider"
import { IngredientCard } from "./IngredientCard"
import "./ingredient.css"

export const MeatList = () => {
  const { ingredients, getIngredients } = useContext(IngredientContext)

  useEffect(() => (
    getIngredients()
  ), [])

  return (
    <>
      <h2 className="ingredient__title">Meats</h2>
      <section className="ingredient__list">
        {
          ingredients.map(ingredient => {
            if (ingredient.type === "meat") {
              return <IngredientCard
                ingredientType={ingredient.type}
                key={ingredient.id}
                ingredient={ingredient}
              />
            }
          })
        }
      </section>
    </>
  )
}