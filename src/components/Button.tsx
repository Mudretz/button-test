import { FC } from "react";

interface Props {
  name: string;
}

export const Button: FC<Props> = ({ name }) => {
  console.log("22")
  return <button>{name}</button>;
};
