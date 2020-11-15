import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

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
