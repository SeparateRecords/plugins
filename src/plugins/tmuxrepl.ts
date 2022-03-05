const plugin: Fig.Plugin = {
  name: "tmuxrepl",
  type: "shell",
  description: "Stupidly simple zsh plugin to have a R-EP-L tmux session.",
  github: "csurfer/tmuxrepl",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
