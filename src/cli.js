#!/usr/bin/env node
import scaffold from '@wide/scaffolder'
import pkg from '../package.json'

scaffold(__dirname, {
  template: '../template',
  pkg
})