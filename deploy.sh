#!/bin/sh
HOME=/home/dev
source $HOME/.zshrc

git pull;

SRC=.
DEST=$HOME/local/okdevtv

cp -rf $SRC/* $DEST

cd $DEST

npm install

pm2 restart all
