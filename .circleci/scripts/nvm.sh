NVM()
{
    if [ "$1" == "install" ]; then
        nvm $1 $2
    fi
    if [ "$2" != "" ]; then
        nvm use $2
    else
        nvm use
    fi
}