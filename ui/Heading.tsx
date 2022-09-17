import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
};

export default function Heading({ children }: Props) {
  return <h1 class="text-8xl">{children}</h1>;
}
