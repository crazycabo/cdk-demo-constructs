#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkDemoConstructsStack } from '../lib/cdk-demo-constructs-stack';

const app = new cdk.App();
new CdkDemoConstructsStack(app, 'CdkDemoConstructsStack');
