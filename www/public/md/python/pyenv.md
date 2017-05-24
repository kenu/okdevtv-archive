# pyenv
* Simple Python version management
* https://github.com/pyenv/pyenv

## install
* `xcode-select --install`
* `brew install pyenv`

## PATH
```
export PATH=$(pyenv root)/shims:$HOME/bin:/usr/local/bin:$PATH
```

## version install
* `pyenv install 3.5.2`

## version list
* `pyenv versions`

## set version
* `pyenv global 3.5.2`


## commands
```
pyenv commands
pyenv local
pyenv global
pyenv shell
pyenv install
pyenv uninstall
pyenv rehash
pyenv version
pyenv versions
pyenv which
pyenv whence
```
