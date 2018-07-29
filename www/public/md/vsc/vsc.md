# Visual Studio Code
* https://code.visualstudio.com

## mac terminal setup
* `code .`
```
cat << EOF >> ~/.zshrc
# Add Visual Studio Code (code)
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
EOF
```
```
cat << EOF >> ~/.bash_profile
# Add Visual Studio Code (code)
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
EOF
```

## Auto Guess Encoding
* settings
```
"files.autoGuessEncoding": true
```

## ref
* https://code.visualstudio.com/docs/setup/mac