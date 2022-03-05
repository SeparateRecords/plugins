const plugin: Fig.Plugin = {
  name: "golinks",
  type: "shell",
  description: "ZSH plugin to launch golinks from your terminal",
  github: "slessans/oh-my-zsh-golinks-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
