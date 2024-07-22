#!/bin/bash

# Update snapshots
npm run update-snapshots

# Check if there are any changes
if [[ `git status --porcelain` ]]; then
  # Changes exist, commit them
  git add tests/playwright/snapshots
  git commit -m "Update visual test baselines [skip-tests]"
  git push origin main
  echo "Updated snapshots have been committed and pushed."
else
  # No changes
  echo "No changes to snapshots detected."
fi