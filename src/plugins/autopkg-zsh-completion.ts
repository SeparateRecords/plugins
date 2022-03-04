const plugin: Fig.Plugin = {
  name: "autopkg-zsh-completion",
  type: "shell",
  description: "My autopkg zsh completion plugin",
  github: "fuzzylogiq/autopkg-zsh-completion",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;