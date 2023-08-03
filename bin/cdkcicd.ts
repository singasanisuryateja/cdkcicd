#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkcicdStack } from '../lib/cdkcicd-stack';

const app = new cdk.App();
new CdkcicdStack(app, 'CdkcicdStack', {
  env: {account: '879349532564', region: 'ap-south-1'},
});

app.synth();