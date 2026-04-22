export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  } else {
    console.log(`[GA4 Event] ${eventName}`, eventParams);
  }
};
