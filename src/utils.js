export function row(content, styles = "") {
  return `<div style='${styles}' class="row">${content}</div>`;
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}

export function css(styles = {}) {
  const toString = key => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}
