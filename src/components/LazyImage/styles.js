import styled, { css } from 'styled-components/native';

const PostImage = css`
  width: 100%;
  aspect-ratio: ${(props) => props.aspectRatio};
`;

export const Small = styled.ImageBackground`
  ${PostImage};
`;

export const Original = styled.Image`
  ${PostImage};
  z-index: 5;
`;
