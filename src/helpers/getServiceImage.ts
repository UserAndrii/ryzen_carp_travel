export function getServiceImage(currentWidht: number, id: string) {
  if (currentWidht <= 767) {
    return `linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/images/services/bg/services_bg_${id}_mob.jpg") 1x, url("/images/services/bg/services_bg_${id}_mob@2x.jpg") 2x)`;
  } else if (currentWidht >= 768 && currentWidht < 1280) {
    return `linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/images/services/bg/services_bg_${id}_tab.jpg") 1x, url("/images/services/bg/services_bg_${id}_tab@2x.jpg") 2x)`;
  } else {
    return `linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/images/services/bg/services_bg_${id}_desk.jpg") 1x, url("/images/services/bg/services_bg_${id}_desk@2x.jpg") 2x)`;
  }
}
