const plugin: Fig.Plugin = {
  name: "allergen",
  type: "shell",
  description: "An collection of custom zsh plugins to use with antigen.",
  github: "stanislas/allergen",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;