THIRD=third_party

prepare:
	make prepare-closure-compiler
	make prepare-closure-library

prepare-closure-compiler:
	@if [ ! -d $(THIRD) ]; then \
		echo "mkdir $(THIRD)"; mkdir $(THIRD); \
	fi
	cd $(THIRD); git clone https://code.google.com/p/closure-compiler-git closure-compiler-git; cd closure-compiler-git; ant jar

prepare-closure-library:
	@if [ ! -d $(THIRD) ]; then \
		echo "mkdir $(THIRD)"; mkdir $(THIRD); \
	fi
	cd $(THIRD); svn checkout http://closure-library.googlecode.com/svn/trunk/ closure-library-read-only
