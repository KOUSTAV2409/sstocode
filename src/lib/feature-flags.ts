// Simple feature flags for the application
export const featureFlags = {
  streamingGeneration: true,
  enhancedPrompts: true,
  multiModelFallback: true,
  structuredOutput: false,
  premiumModels: false,
} as const;

// Helper to check if user has access to premium features
export const isPremiumUser = (userId?: string) => {
  // Add your premium user logic here
  return false;
};

// Helper to get flag value
export const getFlag = (key: keyof typeof featureFlags) => {
  return featureFlags[key];
};
