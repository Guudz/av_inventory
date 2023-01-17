Items = {}

local neccessaryvars = {'item', 'formatname', 'type', 'tradable', 'candelete', 'weight', 'stackable', 'model'}

defineItem = function(datatable, callback)
    local self = {}

    if type(datatable) ~= 'table' then
        Config.DebugMsg('^5[AV_INVENTORY ERROR] ^1 Error at defineItem function. First param is not a table? ^7')
        return
    end

    local validvars = true
    for i=1, #neccessaryvars, 1 do
        local varname = neccessaryvars[i]
        if datatable[varname] == nil then
            validvars = false
        end
    end
    if not validvars then
        Config.DebugMsg('^5[AV_INVENTORY ERROR] ^1 Error at defineItem function. Variables are not set up right? ^7')
        return
    end

    datatable.description = datatable.description or ''

    self.data = datatable
    self.callback = callback or nil

    Items[self.data.item] = self
end

useItem = function(source, item, slot)
    if Items[item] and Items[item].callback then
        Items[item].callback(source, item, slot)
    end
end

exports('defineItem', defineItem)
exports('useItem', useItem)

function getDefinedItem(item)
    if Items[item] and Items[item].data then
        return Items[item].data
    end
    return
end

defineItem({
    item = 'bread', -- image name and etc.
    formatname = 'Kenyér', -- formatted name
    type = 'food',
    tradable = true, -- player can drop & put items into storages like glovebox. (IF TRUE)
    candelete = true, -- delete item on death?
    weight = 1.25, -- weight / quantity
    stackable = true, -- is this item stackable? example: weapons are not 
    description = 'Kenyér az finom.', -- item description
    model = 'v_ret_247_swtcorn2', -- item drop model
}, function(source, item, slot)
    local identifier = Config.getIdentifier(source)
    if not AquiverInventories[identifier] then return end
    Config.DebugMsg(string.format('(player:%s) %s used on slot %s', source, item, slot))

    local success = AquiverInventories[identifier].removeItemAtSlot(slot, 1)
    if success then
        Config.DebugMsg('Removed one amount from the bread.')
    end
end)

defineItem({
    item = 'corn',
    formatname = 'Kukorica',
    type = 'food',
    tradable = true,
    candelete = true,
    weight = 1.25,
    stackable = true,
    description = 'Kukorica az egészséges.',
    model = 'v_ret_247_swtcorn2'
}, function(source, item, slot)
    Config.DebugMsg(string.format('(player:%s) %s used on slot %s', source, item, slot))
end)