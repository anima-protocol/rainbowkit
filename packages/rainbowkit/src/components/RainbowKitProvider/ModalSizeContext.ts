import { createContext } from 'react';

export const ModalSizeOptions = {
  COMPACT: 'compact',
  INLINE: 'inline',
  WIDE: 'wide',
} as const;

export type ModalSizes = typeof ModalSizeOptions[keyof typeof ModalSizeOptions];

export const ModalSizeContext = createContext<ModalSizes>(
  ModalSizeOptions.WIDE
);
