import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";

export const RecipeContext = createContext(undefined);

const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const state = {
        recipes,
        setRecipes,
        filters,
        setFilters,
        sort,
        setSort
    };

    useEffect(async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/recipes`);
            setRecipes(res.data);
        } catch (err) {
            console.warn(err);
        }
    }, []);

    return (
        <RecipeContext.Provider value={state}>{children}</RecipeContext.Provider>
    );
};

const useCategoryContext = () => {
    const context = React.useContext(RecipeContext);
    if (context === undefined) {
        throw new Error('useRecipeProvider must be used within a RecipeProvider');
    }

    return context;
};

export { RecipeProvider, useCategoryContext };
