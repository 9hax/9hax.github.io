#!/bin/bash

# This file is used to automatically set up an Ubuntu system with a good looking shell and some cool aliases.

read -p "Do you want to install 9haxify to this directory? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then

 echo "Please authenticate."
 sudo apt-get install -y git aptitude  
 
 echo "Cloning mybashrc Repository..."
 git clone https://github.com/9hax/mybashrc  
 
 echo "Setting up mybashrc environment in current folder..."
 mv mybashrc/.* .
 echo "You are using fancyprompt with mybashrc by 9hax. This is free Software. Github at bit.ly/mbrcgit" > todo
 
 echo "The current todo file is:"
 source todo
 
 read -p "Installation finished. Do you want to activate your new installation now? (Y) " -n 1 -r
 if ![[ $REPLY =~ ^[Nn]$ ]]
 then
  source .bashrc
 fi

fi
