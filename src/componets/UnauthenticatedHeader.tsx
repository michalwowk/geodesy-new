import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";

const StyledHeader = styled("div")``;

export const UnauthenticatedHeader = () => {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <button>Login</button>
        </ul>
      </nav>
    </StyledHeader>
  );
};
