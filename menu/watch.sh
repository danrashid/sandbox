#!/usr/bin/env bash

jade -w index.jade -P &
jade -w templates -c -D --name-after-file &
sass --watch styles.scss:styles.css --sourcemap=none
