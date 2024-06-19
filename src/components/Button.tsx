import { FC } from "react";

interface Props {
  name: string;
}

export const Button: FC<Props> = ({ name }) => {
  return <button>{name}</button>;
};
