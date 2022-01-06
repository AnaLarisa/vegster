import styled from "styled-components";
import Recipe from "./Recipe";
import {useEffect, useState} from "react";
import axios from "axios";
import {login} from "../redux/apiCalls";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Recipes = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort);
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
      const getRecipes = async () => {
        try {
          const res = await axios.get(
              cat
                  ? `http://localhost:5000/api/recipes?category=${cat}`
                  : `http://localhost:5000/api/recipes`
          );
          setRecipes(res.data);
        } catch (err) {}
      };
      // noinspection JSIgnoredPromiseFromCall
      getRecipes();
    }, [cat]);

    useEffect(() => {
      cat &&
      setFilteredRecipes(
          (recipes.filter((item) =>
              (filters['type'] !== 'Recipe Type' ? item['categories'].includes(filters['type']): item['categories'])))
              .filter((item) =>
              filters['difficulty'] !== 'Difficulty' ? item['difficulty'].includes(filters['difficulty']): item['difficulty'])


              //Object.entries(filters).every(([key, value]) => item[key] === value))

          );

    }, [recipes, cat, filters]);

    useEffect(() => {
      if (sort === "newest") {
        setFilteredRecipes((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
      } else if (sort === "asc") {
        setFilteredRecipes((prev) =>
            [...prev].sort((a, b) => a.title.localeCompare(b.title))
        );
      } else {
        setFilteredRecipes((prev) =>
            [...prev].sort((a, b) => b.title.localeCompare(a.title))
        );
      }
    }, [sort]);

    //const filters = [ type:undefined, difficulty:undefined]; //Object.entries pentru cand treci prin fiecare;  cat se vefica cu value

    return (
        <Container id="recipes">
          {cat
              ? filteredRecipes.map((item) => <Recipe item={item} key={item.id} />)
               :recipes
                  //.filter()
                  .slice(0, 8)
                  .map((item) => <Recipe item={item} key={item.id} />)}
        </Container>
    );
  };


export default Recipes;
