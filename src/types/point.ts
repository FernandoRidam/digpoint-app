export interface PointSuccessfully {
  name: string;
  open: (name: string, seconds: number) => void;
  close: () => void;
};
