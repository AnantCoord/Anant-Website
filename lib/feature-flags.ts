export const featureFlags = {
  recruitments: false,
} as const;

export const isRecruitmentsEnabled = featureFlags.recruitments;