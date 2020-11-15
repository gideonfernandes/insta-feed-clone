import React, { useState, useEffect } from 'react';
import { Animated, View } from 'react-native';

import { Small, Original } from './styles';

const AnimatedPostImage = Animated.createAnimatedComponent(Original);

const LazyImage = ({
  smallSource,
  source,
  aspectRatio,
  shouldLoad,
}) => {
  const opacity = new Animated.Value(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      // setTimeout(() => {
        setLoaded(true);
      // }, 1000);
    };
  }, [shouldLoad]);

  function handleAnimate() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Small
        source={smallSource}
        resizeMode="contain"
        aspectRatio={aspectRatio}
        blurRadius={2}
      >
        {loaded && (
          <AnimatedPostImage
            style={{ opacity }}
            source={source}
            resizeMode="contain"
            aspectRatio={aspectRatio}
            onLoadEnd={handleAnimate}
          />
        )}
      </Small>
    </View>
  );
};

export default LazyImage;
