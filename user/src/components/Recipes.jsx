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
    const { recipes, filters, sortType } = useCategoryContext();

    const getSortFunction = () => {
        switch (sortType) {
            case 'newest':
                return (a, b) => a.createdAt - b.createdAt
            case 'asc':
                return (a, b) => a.title.localeCompare(b.title)
            case 'desc':
                return (a, b) => b.title.localeCompare(a.title)
            default:
                return () => true
        }
    }

    const filteredRecipes = Object.entries(filters).reduce((acc, [key, value]) => {
        return recipes.filter(item => item[key] === value);
    }, recipes).sort(getSortFunction());

    return (
        <Container id="recipes">
          {filteredRecipes
              .slice(0, 8)
              .map((item) => <Recipe item={item} key={item.id} />)}
        </Container>
    );
};


export default Recipes;
