const plugin: Fig.Plugin = {
  name: "javaVersions",
  type: "shell",
  description: "Change between different java versions with this oh-my-zsh plugin",
  github: "miguefl/javaVersions",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
