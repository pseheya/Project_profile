export type Project = {
  name: string;
  description: string;
  fullDescription: React.ReactNode;
  techStack: { frontend: Tech[]; backend: Tech[] };
  videoSrc: string;
  appLink: string;
  gitLink: string;
};

export type Tech = {
  name: string;
  icon?: JSX.Element;
};
