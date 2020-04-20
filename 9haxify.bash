#!/bin/bash

# This file is used to automatically set up an Ubuntu system with a good looking shell and some cool aliases.
# It only downloads an installer file, runs it as rot and deletes it afterwards.
read -p "Do you want to install 9haxify to this system? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then

mkdir /temp/9haxify
wget https://9hax.github.io/9haxify/install.bash /temp/9haxify/
echo "Getting sudo rights to install package and dependencies..."
sudo bash /temp/9haxify/install.bash

fi
