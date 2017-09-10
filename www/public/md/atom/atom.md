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
