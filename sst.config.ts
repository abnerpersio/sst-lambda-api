/// <reference path="./.sst/platform/config.d.ts" />

import { appConfig } from './stacks/config';

export default $config({
  app(input) {
    if (!appConfig.stages.includes(input.stage)) {
      input.stage = 'production';
    }

    return {
      name: appConfig.name,
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
    };
  },
  async run() {
    const stacks = await import('./stacks');

    return {
      apigw: stacks.apigw.url,
    };
  },
});
