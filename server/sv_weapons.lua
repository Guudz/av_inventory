
-- REGISTER AMMO TYPES
defineItem({
    item = '9mm_rounds',
    formatname = '9mm. Rounds',
    type = 'weapon',
    tradable = true,
    candelete = true,
    weight = 1.25,
    stackable = true,
    -- description = '',
    model = 'prop_box_ammo01a'
})
defineItem({
    item = '556_rounds',
    formatname = '556mm. Rounds',
    type = 'weapon',
    tradable = true,
    candelete = true,
    weight = 1.25,
    stackable = true,
    -- description = '',
    model = 'prop_box_ammo01a'
})
-- REGISTER WEAPONS
defineItem({
    item = 'WEAPON_PISTOL',
    formatname = 'Pistol',
    type = 'weapon',
    tradable = true,
    candelete = true,
    weight = 1.25,
    stackable = false,
    description = 'Pistol description.',
    model = 'w_pi_pistol'
}, function(source, item, slot)
    TriggerClientEvent('AquiverInventory:useWeapon', source, 'WEAPON_PISTOL')
end)

defineItem({
    item = 'WEAPON_PISTOL50',
    formatname = 'Pistol 50',
    type = 'weapon',
    tradable = true,
    candelete = true,
    weight = 1.25,
    stackable = false,
    description = 'Pistol 50 description.',
    model = 'w_pi_pistol50'
}, function(source, item, slot)
    TriggerClientEvent('AquiverInventory:useWeapon', source, 'WEAPON_PISTOL50')
end)

defineItem({
    item = 'WEAPON_STUNGUN',
    formatname = 'Stungun',
    type = 'weapon',
    tradable = true,
    candelete = true,
    weight = 1.25,
    stackable = false,
    description = 'Stungun description',
    model = 'w_pi_stungun'
}, function(source, item, slot)
    TriggerClientEvent('AquiverInventory:useWeapon', source, 'WEAPON_STUNGUN', 0)
end)

defineItem({
    item = 'WEAPON_KNIFE',
    formatname = 'Knife',
    type = 'weapon',
    tradable = true,
    candelete = true,
    weight = 1.25,
    stackable = false,
    description = 'Knife description',
    model = 'w_me_knife_01'
}, function(source, item, slot)
    TriggerClientEvent('AquiverInventory:useWeapon', source, 'WEAPON_KNIFE', 0)
end)

RegisterNetEvent('AquiverInventory:reduceWeaponAmmo')
AddEventHandler('AquiverInventory:reduceWeaponAmmo', function(ammoType)
    local source = source
    local identifier = Config.getIdentifier(source)
    if ammoType then
        if AquiverInventories[identifier] then
            local response = AquiverInventories[identifier].removeItem(ammoType, 1)
        end
    end
end)
