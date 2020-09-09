export default function add(data) {
  const html = `<tr data-id=${data.id} data-title=${data.title} data-year=${data.year} data-imdb=${data.imdb}><td>${data.id}</td><td>${data.title}</td><td>${data.year}</td><td>imdb: ${data.imdb.toFixed(2)}</td></tr>`;
  return html;
}

export function addtitle() {
  const html = "<tr class = 'title'><td>id</td><td>title</td><td>year</td><td>imdb</td></tr>";
  return html;
}

export function remove() {
  const tr = document.querySelectorAll('tr');
  for (let i = 1; i < tr.length; i++) {
    tr.item(i).remove();
  }
}
