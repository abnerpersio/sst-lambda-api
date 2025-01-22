/// <reference path="../.sst/platform/config.d.ts" />

import { appConfig } from './config';
import { lambda } from './utils/lambda';

const apigw = new sst.aws.ApiGatewayV2(`${appConfig.name}-api`, {
  cors: true,
  accessLog: {
    retention: '1 day',
  },
});

const environment = {};

apigw.route('GET /health', lambda({ handler: 'src/infra/functions/health.handler', environment }));

export { apigw };
