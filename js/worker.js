addEventListener("message", function (message) {
  const total = message.data;

  for (i = 0; i < total; i++) {
    postMessage(i);
  }
});
