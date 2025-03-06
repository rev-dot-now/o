#!/usr/bin/env bash
rimraf dist
bun run bundle && bun run compile