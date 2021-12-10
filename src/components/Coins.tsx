import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { themeState } from "../atoms";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: ${(props) => props.theme.accentColor};
  position: relative;
`;

const ThemeBtn = styled.button`
  position: absolute;
  left: 50px;
`;

const CoinList = styled.ul``;

const Coin = styled.div`
  width: 350px;
  height: 80px;
  border-radius: 40px;
  padding: 30px;
  background-color: white;
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border: 1px solid black;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

interface ICoin {
  id: string;
  is_active: boolean;
  is_new: boolean;
  name: string;
  rank: number;
  symbol: string;
  type: string;
}

function Coins() {
  const { data, isLoading } = useQuery<ICoin[]>("allCoins", fetchCoins);
  const setThemeState = useSetRecoilState(themeState);
  const toggleTheme = () => setThemeState((prev) => !prev);
  return (
    <Wrapper>
      {isLoading ? (
        <Title>
          <ThemeBtn onClick={toggleTheme}>ToggleTheme</ThemeBtn>
          <span>Loading...</span>
        </Title>
      ) : (
        <>
          <Title>
            <ThemeBtn onClick={toggleTheme}>ToggleTheme</ThemeBtn>
            <span>Coins</span>
          </Title>
          <CoinList>
            {data?.slice(0, 100).map((coin) => {
              return (
                <StyledLink key={coin.id} to={`${coin.id}`} state={{ coin }}>
                  <Coin>{coin.name}</Coin>
                </StyledLink>
              );
            })}
          </CoinList>
        </>
      )}
    </Wrapper>
  );
}

export default Coins;
