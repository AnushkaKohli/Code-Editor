# Code Editor

It's a simple code editor where you can edit you html, css and javascript files easily.

[Demo App](https://caffeinecoder.netlify.app/)

## Steps for creating the project

1. `npm create vite@latest .`

2. `npm i yjs y-codemirror y-webrtc codemirror react-icons`

    **y-codemirror** : provides us the bindings that binds Y.Text type to the CodeMirror document that is currently in use

    **y-webrtc** : It propagates changes in editor via peer-to-peer connection between user using WebRTC

3. `npm i react-codemirror2 --legacy-peer-deps`

4. Add tailwind for styling

## Steps to deploy on netlify:-

1. Run `npm run build`
2. Upload the dist folder on netlify
3. To update the website, again run `npm run build`
4. Go to your projects -> deploys and then upload the new dist folder

## ADD THE FOLLOWING LATER

[ ] Make it collaborative

[ ] Add more themes

[ ] Add more languages

[X] Add font size - 2xl not working

[X] Store the code in localStorage

[ ] Change view
