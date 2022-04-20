import { FormEvent } from "react";

export interface GifProps {
  url: string;
  title: string;
}

export interface SearchbarProps {
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
}

export interface GIFResponseData {
  id: string;
  title: string;
  images: {
    original: {
      url: string;
    };
  };
}

export interface RoutesProps {
  path: string;
  exact?: boolean;
  component: () => JSX.Element;
}
