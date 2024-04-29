export function getServiceImage(currentWidht: number, id: string) {
  const baseImageUrl = `/images/services/bg/services_bg_${id}`;

  if (currentWidht <= 767) {
    return `linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("${baseImageUrl}_mob.jpg") 1x, url("${baseImageUrl}_mob@2x.jpg") 2x)`;
  } else if (currentWidht >= 768 && currentWidht < 1280) {
    return `linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("${baseImageUrl}_tab.jpg") 1x, url("${baseImageUrl}_tab@2x.jpg") 2x)`;
  } else {
    return `linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("${baseImageUrl}_desk.jpg") 1x, url("${baseImageUrl}_desk@2x.jpg") 2x)`;
  }
}
