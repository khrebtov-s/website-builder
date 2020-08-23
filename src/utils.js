export function row(content, styles = "") {
  return `<div style='${styles}' class="row">${content}</div>`;
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}
