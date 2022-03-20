--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]

local ____modules = {}
local ____moduleCache = {}
local ____originalRequire = require
local function require(file, ...)
    if ____moduleCache[file] then
        return ____moduleCache[file].value
    end
    if ____modules[file] then
        local module = ____modules[file]
        ____moduleCache[file] = { value = (select("#", ...) > 0) and module(...) or module(file) }
        return ____moduleCache[file].value
    else
        if ____originalRequire then
            return ____originalRequire(file)
        else
            error("module '" .. file .. "' not found")
        end
    end
end
____modules = {
["display"] = function(...) 
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
format_version = "1.0"
drawCustomDisplay = function(property_values, display_info, dirty_rect)
    jbox.trace("draw")
    jbox_display.draw_rect({top = 2, left = 2, bottom = 20, right = 30}, {r = 255, g = 100, b = 50})
end
gestureCustomDisplay = function(property_values, display_info, gesture_start_point)
    return {handlers = {on_tap = "onTapLowLevelApiDisplay", on_update = "onUpdateLowLevelApiDisplay", on_release = "onReleaseLowLevelApiDisplay", on_cancel = "onCancelLowLevelApiDisplay"}}
end
invalidateCustomDisplay = function(property_values, last_property_values, display_info)
    if display_info then
        local ____jbox_display_invalidate_4 = jbox_display.invalidate
        local ____display_info_width_0 = display_info
        if ____display_info_width_0 ~= nil then
            ____display_info_width_0 = ____display_info_width_0.width
        end
        local ____display_info_height_2 = display_info
        if ____display_info_height_2 ~= nil then
            ____display_info_height_2 = ____display_info_height_2.height
        end
        ____jbox_display_invalidate_4({top = 0, left = 0, right = ____display_info_width_0, bottom = ____display_info_height_2})
    end
end
onTapCustomDisplay = function(property_values, display_info, gesture_info, custom_data)
    jbox.trace("onTap")
    return {}
end
onUpdateCustomDisplay = function(property_values, display_info, gesture_info, custom_data)
    jbox.trace("onUpdate")
    return {}
end
onReleaseCustomDisplay = function(property_values, display_info, gesture_info, custom_data)
    jbox.trace("onRelease")
    return {}
end
onCancelCustomDisplay = function(property_values, display_info, gesture_info, custom_data)
    jbox.trace("onCancel")
    return {}
end
 end,
}
return require("display", ...)
