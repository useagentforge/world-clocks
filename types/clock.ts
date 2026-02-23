export type ClockConfig = {
  id: string;
  label: string;
  timezone: string;
  country: string;
  flagEmoji: string;
};

export type FormattedTime = {
  hours: string;
  minutes: string;
  seconds: string;
  date: string;
  offset: string;
};
