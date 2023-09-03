export const enableBodyScroll = () => {
    const { body, documentElement: html } = document;
    body.style.overflow = '';
    html.style.overflow = '';
};
  
export const disableBodyScroll = () => {
    const { body, documentElement: html } = document;
    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
};
  