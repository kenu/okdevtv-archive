# GruntJS 빌드 도구
* http://gruntjs.com/
* JavaScript 태스크 러너
* 자동화 도구

## 요구사항
* npm
* node.js

## 설치
```
npm install -g grunt-cli
```

* 아래 package.json 예제 파일로 시작
```
{
  "name": "my-project-name",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.5",
    "grunt-contrib-jshint": "~0.10.0",
    "grunt-contrib-nodeunit": "~0.4.1",
    "grunt-contrib-uglify": "~0.5.0"
  }
}
```

* grunt dependencies 저장
```
npm install grunt --save-dev
```

```
npm install grunt-contrib-jshint --save-dev
```


* Gruntfile
```
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
```


## 빌드 파일 구조
* The "wrapper" function
* Project and task configuration
* Loading Grunt plugins and tasks
* Custom tasks


## ref

* http://nodeqa.com/nodejs_ref/66
* https://github.com/octoberskyjs/home
* http://jstherightway.org/
* http://www.dofactory.com/javascript-memento-pattern.aspx

