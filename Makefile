show1 ?= ""
show2 ?= ""
show3 ?= ""
date ?= ""

make:
	mkdir -p bookends
	cd src; npm run make

interval3:
	mkdir -p bookends
	cd src; nodejs ./make-interval3 "$(show1)" "$(show2)" "$(show3)" "$(date)"

interval2:
	mkdir -p bookends
	cd src; nodejs ./make-interval2 "$(show1)" "$(show2)" "$(date)"

interval1:
	mkdir -p bookends
	cd src; nodejs ./make-interval1 "$(show1)" "$(date)"

bookend3:
	mkdir -p bookends
	cd src; nodejs ./make-bookend3 "$(show1)" "$(show2)" "$(show3)" "$(date)"

bookend2:
	mkdir -p bookends
	cd src; nodejs ./make-bookend2 "$(show1)" "$(show2)" "$(date)"

bookend1:
	mkdir -p bookends
	cd src; nodejs ./make-bookend1 "$(show1)" "$(date)"
