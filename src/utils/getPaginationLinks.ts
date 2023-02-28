export default function getPaginationComandsByLink(link: string) {
  const links = link.split(",");
  const linksObject: any = {};
  links.forEach((link) => {
    const [url, rel] = link.split(";");
    const pageNumber = url.match(/_page=(\d+)/)?.[1];
    const relName: any = rel.match(/rel="(\w+)"/)?.[1];
    linksObject[relName] = pageNumber;
  });
  return linksObject;
}