export interface SingleExp {
  workplace: string;

  position: string;

  startDate: string;

  stillWorking?: true;
  location: string;
  whatIDid: string[];
  endDate?: string;
  projects?: { name: string; link: string }[];
}
