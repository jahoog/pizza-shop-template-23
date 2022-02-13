import { Cache, Analytics } from "aws-amplify";

const CID_KEY = "currentOrderId";

// Convert time to hours and minutes
export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};
// Convert time to AppSync format
export const getAppsyncDate = (year, month, day, hours, minutes, seconds) => {
  //2022-01-23T20:02:00.686Z
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
};

export const displayDateFromAppSync = (appSyncDate) => {
  const cDate = new Date(appSyncDate);
  return `${cDate.getFullYear()}-${appendLeadingZeroes(
    cDate.getMonth() + 1
  )}-${appendLeadingZeroes(cDate.getDate())}`;
};

export const appendLeadingZeroes = (n) => {
  if (n <= 9) {
    return "0" + n;
  }
  return n;
};

export const autoTrackAnalytics = (status) => {
  Analytics.autoTrack("session", {
    // REQUIRED, turn on/off the auto tracking
    enable: true,
    provider: "AWSPinpoint",
  });

  Analytics.autoTrack("pageView", {
    // REQUIRED, turn on/off the auto tracking
    enable: true,
    // OPTIONAL, the event name, by default is 'pageView'
    eventName: "pageView",
    // OPTIONAL, by default is 'multiPageApp'
    // you need to change it to 'SPA' if your app is a single-page app like React
    type: "SPA",
    // OPTIONAL, the service provider, by default is the Amazon Pinpoint
    provider: "AWSPinpoint",
    // OPTIONAL, to get the current page url
    getUrl: () => {
      // the default function
      return window.location.origin + window.location.pathname;
    },
  });

  Analytics.autoTrack("event", {
    // REQUIRED, turn on/off the auto tracking
    enable: true,
    // OPTIONAL, events you want to track, by default is 'click'
    events: ["click"],
    // OPTIONAL, the prefix of the selectors, by default is 'data-amplify-analytics-'
    // in order to avoid collision with the user agent, according to https://www.w3schools.com/tags/att_global_data.asp
    // always put 'data' as the first prefix
    selectorPrefix: "data-amplify-analytics-",
    // OPTIONAL, the service provider, by default is the Amazon Pinpoint
    provider: "AWSPinpoint",
  });
};

export const getCurrentOrderIdFromCache = () => {
  return Cache.getItem(CID_KEY);
};

export const setCurrentOrderIdInCache = (newOrderId) => {
  Cache.setItem(CID_KEY, newOrderId);
};

export const removeOrderIdFromCache = () => {
  Cache.removeItem(CID_KEY);
};

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
