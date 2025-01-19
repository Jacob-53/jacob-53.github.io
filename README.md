# Jacob's blog
- D'oh 
  
<img src="https://static.wikia.nocookie.net/simpsons/images/8/8d/DOH.jpg/revision/latest?cb=20120102043027" alt="tiger cute" style="width:200px;"/>

### Connecting
- PRD - https://blog.jacob53.shop, https://jacob-53.github.io
- STG - https://blog-c3b4c.web.app 
- DEV -
- LOCAL - http://localhost:8080 

<!--### Contribute guide
- Anyone can do it's possible. Let's send the PR first and make it a better team by joining.

0. created based on [vuepress](https://v2.vuepress.vuejs.org/)
1. git clone https://github.com/oss-cashmallow/oss-cashmallow.github.io.git
2. edit with [vscode](https://code.visualstudio.com/)
3. install -->

``` bash
https://github.com/nvm-sh/nvm
https://pnpm.io/ko/
```
- run - development environment [install pnpm](https://pnpm.io/installation)
- connecting to localhost 8080
- node.js install if you have get error 'ELIFECYCLE Command failed'
```
$ nvm install --lts
$ nvm ls
$ nvm use v22.13.0
$ node -v
v22.13.0
$ pnpm install
$ pnpm docs:dev
```

### build & deploy
1. STG
- [x] 배포전 작업 파일은 모두 커밋!
- 커밋까지 완료했다면
- pnpm docs:build
- git add .
- git commit
- git push

- 각 브랜치와 STG(firebase) 연결 수정 후 테스트 가능 
<!-- ``` bash
$ sh deploy-stg.sh

=== Deploying to 'oss-cashmallow'...

i  deploying hosting
i  hosting[oss-cashmallow]: beginning deploy...
i  hosting[oss-cashmallow]: found 43 files in ./docs
✔  hosting[oss-cashmallow]: file upload complete
i  hosting[oss-cashmallow]: finalizing version...
✔  hosting[oss-cashmallow]: version finalized
i  hosting[oss-cashmallow]: releasing new version...
✔  hosting[oss-cashmallow]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/oss-cashmallow/overview
Hosting URL: https://oss-cashmallow.web.app
╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╡╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╡
다음 항목을 제거할 예정입니다:
  docs/assets/app-a5e3f83c.js         docs/assets/index.html-77e713f0.js  docs/team/how2pr/
  docs/assets/index.html-6e725bfb.js  docs/assets/index.html-a3f200a8.js
*** 명령 ***
    1: clean                2: filter by pattern    3: select by numbers    4: ask each             5: quit
    6: help
무엇을 할까요> 1
docs/assets/app-a5e3f83c.js 제거
docs/assets/index.html-6e725bfb.js 제거
docs/assets/index.html-77e713f0.js 제거
docs/assets/index.html-a3f200a8.js 제거
docs/team/how2pr/ 제거
╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╡╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╡
STG DEPLOY OK!
https://oss-cashmallow.web.app
``` -->


2. PRD
``` bash
- 브랜치 PR 에 생성된 STG 링크로 테스트 완료했다면
- main 에 머지후 릴리스 노트 생성
- Github Action 에서 진행과정 확인
- [PRD](https://blog.jacob53.shop) 
<!-- github pages - docs
- pnpm docs:build
- git add.
- git commit -a
- git push -->

https://jacob-53.github.io/

<img src="https://user-images.githubusercontent.com/120996497/212484360-1b212db0-5a5c-449f-8cc2-35de2126bd66.png" alt="cashmallow" style="width:600px;"/>
<img src="https://oss-cashmallow.github.io/images/hero.png" alt="cashmallow" style="width:200px;"/>
