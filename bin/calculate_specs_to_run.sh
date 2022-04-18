
#!/bin/bash

set -e

CI_NODE_TOTAL=$SYSTEM_TOTALJOBSINPHASE
CI_NODE_INDEX=$SYSTEM_JOBPOSITIONINPHASE

if [ $CI_NODE_TOTAL -eq 0 ]; then CI_NODE_TOTAL=1; fi # below conditions are used if parallel pipeline is not used. i.e. pipeline is running with single agent (no parallel configuration)
if [ -z "$CI_NODE_INDEX" ]; then CI_NODE_INDEX=1; fi

allSpecs=$(find test/cypress/integration -name "*.spec.ts" | sort -n)
echo "$allSpecs" > allSpecs.txt
split -n "l/$CI_NODE_INDEX/$CI_NODE_TOTAL" allSpecs.txt | paste -sd "," -
rm allSpecs.txt