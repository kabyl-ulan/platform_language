export const windowOpen = (link: string) => {
  window.open(link);
};

export const windowLocation = (link: string) => {
  window.location.href = link;
};

export const windowHistoryBack = () => {
  window.history.back();
};
