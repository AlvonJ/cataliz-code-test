const _serializeSingle = book => {
  return {
    id: book.id,
    name: book.name,
    author: book.author,
    pages: book.pages,
    year: book.year,
  };
};

const serializer = data => {
  if (!data) return null;

  if (Array.isArray(data)) return data.map(_serializeSingle);

  return _serializeSingle(data);
};

module.exports = serializer;
