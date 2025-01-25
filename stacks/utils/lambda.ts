/// <reference path="../../.sst/platform/config.d.ts" />

type Args = Omit<
  sst.aws.FunctionArgs,
  "architecture" | "nodejs" | "runtime" | "logging" | "transform"
>;

// const getFunctionName = (handlerPath: string) => {
//   const handlerNameRegex = /.{1,}\/(.{1,}).(handler)/;
//   const name = handlerPath.replace(handlerNameRegex, "$1");
//   return `${appConfig.name}-${name}`;
// };

export function lambda(args: Args): sst.aws.FunctionArgs {
  return {
    architecture: "arm64",
    memory: "128 MB",
    runtime: "nodejs22.x",
    nodejs: {
      esbuild: {
        bundle: true,
        minify: true,
        sourcemap: false,
        external: ["@aws-sdk/*"],
      },
    },
    logging: {
      retention: "1 week",
    },
    ...args,
  };
}
