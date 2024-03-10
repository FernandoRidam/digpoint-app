import { ConfirmExit } from "./exit";
import { PointSuccessfully } from "./point";
import { User } from "./user";

export interface Store {
  user: User | null;
  pointSuccessfully: PointSuccessfully;
  confirmExit: ConfirmExit;
  login: (user: User) => void;
  logout: () => void;
  loading: boolean;
  loadingStart: () => void;
  loadingEnd: () => void;
};
