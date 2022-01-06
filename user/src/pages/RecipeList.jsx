import styled from "styled-components";
import Navbar from "../components/Navbar";
import Recipes from "../components/Recipes";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useState } from "react";
import {useLocation} from "react-router";

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
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);

  return (
    <Container>
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Recipes:</FilterText>
          <Select name = "type" onChange={handleFilters}>
            <Option >
              Recipe Type
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
          <Select name = "difficulty" onChange={handleFilters}>
            <Option >
              Difficulty
            </Option >
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
      <Recipes cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  )
};

export default RecipeList;
