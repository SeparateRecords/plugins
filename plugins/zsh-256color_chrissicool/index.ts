const plugin: Fig.Plugin = {
  icon: "🎨",
  name: "zsh-256color_chrissicool",
  displayName: "256color zsh",
  type: "shell",
  description: "ZSH plugin to enhance the terminal environment with 256 colors",
  authors: [
    {
      name: "chrissicool",
      github: "chrissicool",
      twitter: "chrissicool",
    },
  ],
  github: "chrissicool/zsh-256color",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-256color.plugin.zsh"],
  },
};

export default plugin;
