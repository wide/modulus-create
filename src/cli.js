#!/usr/bin/env node
import { argv } from 'yargs'
import scaffold from '@wide/scaffolder'
import pkg from '../package.json'

scaffold(__dirname, {
  template: argv.examples ? '../templates/examples' : '../templates/blank',
  pkg
})