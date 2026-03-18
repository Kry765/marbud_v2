export interface NavLink {
  href?: string;
  text: string;
  children?: NavChild[];
}

export interface NavChild {
  href: string;
  text: string;
}
