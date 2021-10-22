export const areYouPlayingBanjo = (name: string): string =>
  name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
