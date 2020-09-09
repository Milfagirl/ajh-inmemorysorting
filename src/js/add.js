export default function add(data) {
  const html = `<tr data-id=${data.id} data-title=${data.title} data-year=${data.year} data-imdb=${data.imdb}><td>${data.id}</td><td>${data.title}</td><td>${data.year}</td><td>imdb: ${data.imdb.toFixed(2)}</td></tr>`;
  return html;
}
