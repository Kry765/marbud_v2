export interface NavLink {
  href?: string;
  text: string;
  children?: NavChild[];
}

export interface NavChild {
  href: string;
  text: string;
}

export interface FooterText {
  text: string;
}

export interface FooterMenu {
  href: string;
  text: string;
}
