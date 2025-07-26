module.exports = {
  respondToHate: async (style = "auto") => {
    const replies = {
      auto: "Use deawait() or go no-async. Nova is async, you should be too.",
      snarky: "Async is not a bug. It's a flex.",
      soft: "Use 'await'. Nova still loves you.",
    };
    return replies[style] || replies.auto;
  },
  ping: () => "pong",
};
