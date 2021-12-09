import styled from "styled-components";
import {
  useParams,
  useLocation,
  useNavigate,
  NavLink,
  Outlet,
} from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinInfo } from "../api";
import { useSetRecoilState } from "recoil";
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

const Buttons = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 50px;
`;

const ThemeBtn = styled.button``;

const BackBtn = styled.button``;

const Desc = styled.div`
  width: 300px;
  margin: 50px 0px;
  color: ${(props) => props.theme.textColor};
`;

const Links = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const StyledNavLink = styled(NavLink)`
  width: 100px;
  padding: 20px;
  text-decoration: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  color: black;
  &.active {
    color: red;
  }
`;

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

function Coin() {
  const setThemeState = useSetRecoilState(themeState);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { coinId } = useParams();
  const { data, isLoading } = useQuery<InfoData>("coinInfo", () =>
    fetchCoinInfo(coinId)
  );

  return (
    <Wrapper>
      <Title>
        <Buttons>
          <ThemeBtn onClick={() => setThemeState((prev) => !prev)}>
            Theme toggle
          </ThemeBtn>
          <BackBtn onClick={() => navigate("/coin-tracker")}>Go Back</BackBtn>
        </Buttons>
        {state ? state.coin.name : isLoading ? "Loading" : data?.name}
      </Title>
      <Desc>
        <p>{data?.description}</p>
      </Desc>
      <Links>
        <StyledNavLink
          to="price"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Price
        </StyledNavLink>
        <StyledNavLink
          to="chart"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Chart
        </StyledNavLink>
      </Links>
      <Outlet />
    </Wrapper>
  );
}

export default Coin;
