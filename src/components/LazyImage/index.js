import React, { useState, useEffect } from 'react';

import { Container, Small, Original } from './styles';

const LazyImage = ({
  smallSource,
  source,
  aspectRatio,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  async function handleAnimate() {};

  return (
    <Container>
      <Small
        source={smallSource}
        resizeMode="contain"
        aspectRatio={aspectRatio}
        blurRadius={2}
      >
        {loaded && (
          <Original
            source={source}
            resizeMode="contain"
            aspectRatio={aspectRatio}
            onLoadEnd={handleAnimate}
          />
        )}
      </Small>
    </Container>
  );
};

export default LazyImage;
