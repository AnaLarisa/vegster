import styled from "styled-components";
import Recipe from "./Recipe";
import {useEffect, useState} from "react";
import axios from "axios";
import {login} from "../redux/apiCalls";
import {useCategoryContext} from "../contexts/RecipeContext";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Recipes = () => {
    const { recipes, filters } = useCategoryContext();

    // useEffect(() => {
    //   if (sort === "newest") {
    //     setFilteredRecipes((prev) =>
    //         [...prev].sort((a, b) => a.createdAt - b.createdAt)
    //     );
    //   } else if (sort === "asc") {
    //     setFilteredRecipes((prev) =>
    //         [...prev].sort((a, b) => a.title.localeCompare(b.title))
    //     );
    //   } else {
    //     setFilteredRecipes((prev) =>
    //         [...prev].sort((a, b) => b.title.localeCompare(a.title))
    //     );
    //   }
    // }, [sort]);

    const filteredRecipes = Object.entries(filters).reduce((acc, [key, value]) => {
        return recipes.filter(item => item[key] === value);
    }, recipes);

    console.log(filters);
    console.log("RESULT", filteredRecipes);

    return (
        <Container id="recipes">
          {filteredRecipes
              .slice(0, 8)
              .map((item) => <Recipe item={item} key={item.id} />)}
        </Container>
    );
};


export default Recipes;
