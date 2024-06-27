import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  output: {
    filename: {
      svg: "[name].[hash][ext][query][fragment]",
    },
    distPath: {
      root: "./rsbuild-dist",
    },
  },
  tools: {
    rspack: (config, { env }) => {
      config.output.assetModuleFilename = "_/[name].[hash][ext][query][fragment]"
      config.module.parser.asset = { dataUrlCondition: { maxSize: 0 } }
      console.debug(config)
      return config
    }
  },
});
