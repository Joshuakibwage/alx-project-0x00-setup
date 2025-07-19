export interface PillProps {
  title: string
}

// interfaces/index.tsx
export interface ButtonProps {
  title: string;
  size?: 'small' | 'medium' | 'large';
  rounded?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  className?: string; // Optional for extra styles
}
