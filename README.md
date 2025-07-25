## 개발 환경 설정
 
### 1. VSCode 설치
1. [VSCode 다운로드 페이지](https://code.visualstudio.com/)에서 운영체제에 맞는 버전 다운로드
2. 설치 시 다음 옵션들을 체크:
   - "파일 탐색기의 '코드로 열기' 작업에 추가"
   - "PATH에 추가"
   - "파일 확장자 연결"
   - \safety\workspace\"git clone https://github.com/OHJONGSANG/safety-app.git" 실행
3. NodeJS 설치
   - https://nodejs.org/en/download/
 
### 2. 필수 VSCode 확장 프로그램
1. **Volar (Vue Language Features)**
   - Vue 3 지원
   - TypeScript 지원
   - 설치 ID: `Vue.volar`
 
2. **Tailwind CSS IntelliSense**
   - Tailwind CSS 자동완성
   - 설치 ID: `bradlc.vscode-tailwindcss`
 
3. **Path Intellisense**
   - 파일 경로 자동완성
   - 설치 ID: `christian-kohler.path-intellisense`
 
4. **Extension Pack for Java**
    - Java 개발 필수 확장 프로그램 모음
    - 설치 ID: `vscjava.vscode-java-pack`
    - 포함된 확장 프로그램:
      - Language Support for Java
      - Debugger for Java
      - Test Runner for Java
      - Maven for Java
      - Project Manager for Java
      - Visual Studio IntelliCode
 
5. **Spring Boot Extension Pack**
    - Spring Boot 개발 필수 확장 프로그램 모음
    - 설치 ID: `vmware.vscode-boot-dev-pack`
    - 포함된 확장 프로그램:
      - Spring Boot Tools
      - Spring Initializr
      - Spring Boot Dashboard
      - Spring Boot Properties
 
6. **Spring Boot Dashboard**
    - Spring Boot Dashboard
    - 설치 ID: `vscjava.vscode-spring-boot-dashboard`
 
7. **Gradle for Java**
    - Gradle 빌드 도구 지원
    - 설치 ID: `vscjava.vscode-gradle`
 
8. **npm Intellisense**
    - npm 패키지 자동완성
    - 설치 ID: `christian-kohler.npm-intellisense`
 
### 3. 프로젝트 실행 방법
1. 프론트엔드 실행
```bash
cd safety-frontend
npm install
npm run dev
```
 
2. 백엔드 실행
```bash
cd safety-backend
./gradlew bootRun
```
 
### 4. 주요 기술 스택
- Frontend: Vue 3, Vite, Tailwind CSS, PrimeVue
- Backend: Spring Boot, Gradle
- Database: MariaDB
- IDE: VSCode
 
### 5. 브랜치 전략
- main: 프로덕션 브랜치
- develop: 개발 브랜치
- feature/*: 기능 개발 브랜치
- hotfix/*: 긴급 수정 브랜치
 
### 6. 커밋 메시지 규칙
- feat: 새로운 기능
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 포맷팅
- refactor: 코드 리팩토링
- test: 테스트 코드
- chore: 빌드 업무 수정
 
### 7. 기타
- vscode PowerShell Console 에서 npm 명령실행 안될 때 환경설정 수정 : Set-ExecutionPolicy Unrestricted -Scope CurrentUser
- Git이 해당 디렉터리를 신뢰할 수 있도록 설정 : git config --global --add safe.directory C:/safety/workspace/safety-app
git config --global user.name "example"
git config --global user.email "example@sgacorp.kr"
# gallery
