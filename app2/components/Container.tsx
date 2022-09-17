import { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
};

export default function Container({ children }: Props) {
  return <main class="pt-8">{children}</main>;
}
