#!/usr/bin/env bash

jade -w index.jade -o . -P &
sass --watch styles.scss:styles.css --sourcemap=none
