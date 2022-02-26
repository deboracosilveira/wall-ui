const formatDate = (dateTime: Date) => {
  const date = new Date(dateTime);

  const formatted =
    date.toLocaleString('en-us', {
      month: 'short'
    }) +
    ' ' +
    date.getDate() +
    ', ' +
    date.getFullYear() +
    ' at ' +
    date.toLocaleTimeString('en-us', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

  return formatted;
};

export default formatDate;
