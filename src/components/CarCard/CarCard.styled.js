import styled from "@emotion/styled";

export const FavoriteButton = styled.button`
  background-color: ${({ isFavorite }) => (isFavorite ? "green" : "red")};
`;
