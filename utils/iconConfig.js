const IconConfig = {
  color: {
    javascript: "#20232A",
    react: "#20232A",
    vue: "#0A2B4E"
  },
  background: {
    javascript: "#F7DF1E",
    react: "#61DAFB",
    vue: "#41B883"
  }
};

export const getColor = heading => {
  if (heading === "javascript") {
    return IconConfig.background.javascript;
  } else if (heading === "react") {
    return IconConfig.background.react;
  } else {
    return IconConfig.background.vue;
  }
};
