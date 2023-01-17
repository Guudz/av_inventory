fx_version 'adamant'

game 'gta5'

description 'Aquiver Version 2.0 - Inventory System'
author 'freamee'
version '1.0.3'

server_scripts {
    '@mysql-async/lib/MySQL.lua',
    'itemregister.lua',
    'config_weights.lua',
    'server/sv_main.lua',
    'server/sv_droppeditems.lua',
    'server/sv_weapons.lua',
    'server/sv_callbacks.lua'
}

shared_scripts {
    'locales.lua',
    'locales/*.lua',
    'config.lua'
}

client_scripts {
    'client/cl_main.lua',
    'client/cl_droppeditems.lua',
    'client/cl_clothing.lua',
    'client/cl_weapons.lua'
}

dependencies {'mysql-async'}

ui_page 'html/index.html'

files {'html/**'}
