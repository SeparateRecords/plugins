const plugin: Fig.Plugin = {
  name: "timewarrior",
  type: "shell",
  description: "zsh plugin for timewarrior",
  github: "svenXY/timewarrior",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;