import { Dimensions, Platform, PixelRatio } from 'react-native';

export function normalize(size: number) {
  const screenWidth = Dimensions.get('window').width;

  // Define scaling factors for different device sizes
  const scaleSmall = 2;  // For small screens (e.g., mobile)
  const scaleMedium = 2.3;   // For medium screens (e.g., tablets)
  const scaleLarge = 2.6;  // For large screens (e.g., desktops)

  // Determine the appropriate scaling factor based on screen width
  let scale;
  if (screenWidth < 768) {
    scale = scaleSmall;
  } else if (screenWidth < 1024) {
    scale = scaleMedium;
  } else {
    scale = scaleLarge;
  }

  // Calculate the scaled font size
  let scaledSize = size * scale;

  // Round and adjust font size based on platform (iOS or Android)
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(scaledSize));
  } else {
    // For Android, you may need to adjust the scaling factor further
    // based on your design preferences
    return Math.round(PixelRatio.roundToNearestPixel(scaledSize));
  }
}