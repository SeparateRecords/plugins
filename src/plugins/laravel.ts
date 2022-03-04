const plugin: Fig.Plugin = {
  name: "laravel",
  type: "shell",
  description: "Laravel 5 artisan commands aliases plugin for zsh",
  github: "crazybooot/laravel-zsh-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;