function getFromLocalstorage(key: string): string | null {
  const value = localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }

  return null;
}

function removeKeyOfLocalstorage(key: string): void {
  localStorage.removeItem(key);
}

export { getFromLocalstorage, removeKeyOfLocalstorage };
