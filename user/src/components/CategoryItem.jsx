import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom";
import {useCategoryContext} from "../contexts/RecipeContext";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    text-shadow: 2px 2px black;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: #161d16;
    color:WHITE;
    cursor: pointer;
    font-weight: 900;
`;

const CategoryItem = ({ item }) => {
    const { setFilters } = useCategoryContext();

    console.log(item);

    return (
        <Container onClick={() => {
            setFilters(prev => ({...prev, category: item.cat}))
        }}>
            <Link to={`/recipes`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    );
};

export default CategoryItem;
