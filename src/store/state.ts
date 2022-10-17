export interface TimezoneInfoState {
  city: string;
  value: string;
  timezone: string;
  image: string;
}

export interface State {
  now: Date;
  timezoneOptions: TimezoneInfoState[];
  selectedTimezone: TimezoneInfoState;
  handLoading: boolean;
}

function state(): State {
  return {
    timezoneOptions: [
      {
        city: "Seoul",
        value: "seoul",
        timezone: "Asia/Seoul",
        image: require("@/assets/seoul.jpg"),
      },
      {
        city: "Los Angeles",
        value: "la",
        timezone: "America/Los_Angeles",
        image: require("@/assets/losangeles.jpg"),
      },
      {
        city: "London",
        value: "london",
        timezone: "Europe/London",
        image: require("@/assets/london.jpg"),
      },
    ] as TimezoneInfoState[],
    selectedTimezone: {
      city: "Seoul",
      value: "seoul",
      timezone: "Asia/Seoul",
      image: require("@/assets/seoul.jpg"),
    } as TimezoneInfoState,
    now: new Date(),
    handLoading: false,
  };
}

export default state;
