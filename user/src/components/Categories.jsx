import styled from "styled-components";

import { useCategoryContext } from '../contexts/RecipeContext';
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Categories = () => {
  const { setCategory } = useCategoryContext();

  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem onClick={() => setCategory(item.cat)} item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
