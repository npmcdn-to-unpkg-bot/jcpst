#!/bin/bash

fan_profile='josephpost'

curl -s "https://bandcamp.com/${fan_profile}" \
	| grep -A 2 "item-link-alt\">" \
	| sed -e 's/.*">//' \
		  -e 's/<\/.*//' \
		  -e 's/--//' \
		  -e '/^[A-Z].*$/i <br /><em>' \
		  -e '/^[A-Z].*$/a </em>' \
		  -e '/^by \S$/i ZZZ' \
		  -e 's/by /by <strong>/' \
		  -e '/by /a </strong>'

