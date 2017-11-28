# Atom
* https://atom.io
* Text Editor from GitHub
* Read big file fast
* Git support
* Plugin support
* competitors : brackets, visual studio code

## open atom in terminal
```
atom .
```

## Useful shortcuts
* open file by name : ctrl + t, cmd + t
* open Settings : ctrl + `,`, cmd + `,`

## Useful plugins
* https://atom.io/packages/platformio-ide-terminal
* https://atom.io/packages/open-terminal-here
* markdown-preview
* emmet

## shortcuts conflict
* markdown-preview vs emmet
* override **keymap.cson** in Settings
```
'atom-workspace, atom-workspace atom-text-editor':
  'ctrl-shift-M': 'markdown-preview:toggle'
```

## Atom Package Manager
```
apm install emmet
Installing emmet to /Users/kenu/.atom/packages ✓
```

## Git
* Toggle git tab : `^` + `(`

## image embed
* ctrl + shift + i

```
<img src="https://cdn-images-1.medium.com/max/1600/1*4lHHyfEhVB0LnQ3HlhSs8g.png">
<img src="data:image/png;base64,iVBORw0KGgo....">
```
