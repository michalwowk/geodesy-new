import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";

const StyledHeader = styled("div")``;

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <button>Logout</button>
        </ul>
      </nav>
    </StyledHeader>
  );
};
