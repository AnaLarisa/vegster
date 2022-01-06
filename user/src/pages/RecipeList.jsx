import React from "react";
import styled from "styled-components";

import { useCategoryContext } from "../contexts/RecipeContext";
import Navbar from "../components/Navbar";
import Recipes from "../components/Recipes";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  font-size: 35pt;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const RecipeList = () => {
  const {setSort, filters, setFilters} = useCategoryContext();

  const RESETS = {
    category: 'Recipe Type',
    difficulty: 'Difficulty'
  }

  const handleFilters = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (value === RESETS[name]) {
      const newFilters = { ...filters };
      delete newFilters[name];
      setFilters(newFilters);
      return;
    }

    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Title>Recipes</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Recipes:</FilterText>
          <Select name="category" onChange={handleFilters}>
            <Option>
              {RESETS.category}
            </Option>
            <Option>Main meal</Option>
            <Option>Appetizer</Option>
            <Option>Side</Option>
            <Option>Breakfast</Option>
            <Option>Smoothie</Option>
            <Option>Soup</Option>
            <Option>Salad</Option>
            <Option>Dessert</Option>
          </Select>
          <Select name="difficulty" onChange={handleFilters}>
            <Option>
              {RESETS.difficulty}
            </Option>
            <Option>Super easy</Option>
            <Option>Easy</Option>
            <Option>Medium</Option>
            <Option>Complicated</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Recipes:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">A to Z</Option>
            <Option value="desc">Z to A</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Recipes />
      <Newsletter />
      <Footer />
    </Container>
  )
};

export default RecipeList;
