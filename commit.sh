#!/usr/bin/env bash
BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo $BRANCH
git add .
git commit -m "W.I.P."
git push origin $BRANCH
