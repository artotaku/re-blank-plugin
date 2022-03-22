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
["display1"] = function(...) 
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local customDisplayPropertyIndex = 0
local customDisplayName = "CustomDisplay1"
____exports.draw = function(property_values, display_info, dirty_rect)
    local propertyValue = property_values[customDisplayPropertyIndex + 1]
    jbox.trace((customDisplayName .. ":draw: ") .. tostring(propertyValue))
    local color = propertyValue == 0 and ({r = 255, g = 0, b = 0}) or ({r = 0, g = 255, b = 50})
    local rect = {top = 2, left = 2, bottom = 20, right = 30}
    jbox_display.draw_rect(rect, color)
    jbox_display.draw_text(
        rect,
        "center",
        "" .. tostring(propertyValue),
        "Small LCD font",
        {r = 255, g = 255, b = 255}
    )
end
____exports.gesture = function(property_values, display_info, gesture_start_point)
    return {handlers = {on_tap = "onTap" .. customDisplayName, on_update = "onUpdate" .. customDisplayName, on_release = "onRelease" .. customDisplayName, on_cancel = "onCancel" .. customDisplayName}}
end
____exports.invalidate = function(property_values, last_property_values, display_info)
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
____exports.onTap = function(property_values, display_info, gesture_info, custom_data)
    local propertyValue = property_values[customDisplayPropertyIndex + 1]
    jbox.trace((customDisplayName .. ":onTap: ") .. tostring(propertyValue))
    return {
        property_changes = {propertyValue == 0 and 1 or 0},
        gesture_ui_name = jbox.ui_text("gesture_ui_name_" .. customDisplayName)
    }
end
____exports.onUpdate = function(property_values, display_info, gesture_info, custom_data)
    jbox.trace(customDisplayName .. ":onUpdate")
    return {}
end
____exports.onRelease = function(property_values, display_info, gesture_info, custom_data)
    jbox.trace(customDisplayName .. ":onRelease")
    return {}
end
____exports.onCancel = function(property_values, display_info, gesture_info, custom_data)
    jbox.trace(customDisplayName .. ":onCancel")
    return {}
end
return ____exports
 end,
["display2"] = function(...) 
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local customDisplayPropertyIndex = 0
local customDisplayName = "CustomDisplay2"
____exports.draw = function(property_values, display_info, dirty_rect)
    local propertyValue = property_values[customDisplayPropertyIndex + 1]
    jbox.trace((customDisplayName .. ":draw: ") .. tostring(propertyValue))
    local color = propertyValue == 0 and ({r = 255, g = 0, b = 0}) or ({r = 0, g = 255, b = 50})
    local rect = {top = 2, left = 2, bottom = 20, right = 30}
    jbox_display.draw_rect(rect, color)
    jbox_display.draw_text(
        rect,
        "center",
        "" .. tostring(propertyValue),
        "Small LCD font",
        {r = 255, g = 255, b = 255}
    )
end
____exports.gesture = function(property_values, display_info, gesture_start_point)
    return {handlers = {on_tap = "onTap" .. customDisplayName, on_update = "onUpdate" .. customDisplayName, on_release = "onRelease" .. customDisplayName, on_cancel = "onCancel" .. customDisplayName}}
end
____exports.invalidate = function(property_values, last_property_values, display_info)
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
____exports.onTap = function(property_values, display_info, gesture_info, custom_data)
    local propertyValue = property_values[customDisplayPropertyIndex + 1]
    jbox.trace((customDisplayName .. ":onTap: ") .. tostring(propertyValue))
    return {
        property_changes = {propertyValue == 0 and 1 or 0},
        gesture_ui_name = jbox.ui_text("gesture_ui_name_" .. customDisplayName)
    }
end
____exports.onUpdate = function(property_values, display_info, gesture_info, custom_data)
    jbox.trace(customDisplayName .. ":onUpdate")
    return {}
end
____exports.onRelease = function(property_values, display_info, gesture_info, custom_data)
    jbox.trace(customDisplayName .. ":onRelease")
    return {}
end
____exports.onCancel = function(property_values, display_info, gesture_info, custom_data)
    jbox.trace(customDisplayName .. ":onCancel")
    return {}
end
return ____exports
 end,
["display"] = function(...) 
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local MyDisplay1 = require("display1")
local MyDisplay2 = require("display2")
_G.format_version = "1.0"
_G.drawCustomDisplay1 = MyDisplay1.draw
_G.gestureCustomDisplay1 = MyDisplay1.gesture
_G.invalidateCustomDisplay1 = MyDisplay1.invalidate
_G.onTapCustomDisplay1 = MyDisplay1.onTap
_G.onUpdateCustomDisplay1 = MyDisplay1.onUpdate
_G.onReleaseCustomDisplay1 = MyDisplay1.onRelease
_G.onCancelCustomDisplay1 = MyDisplay1.onCancel
_G.drawCustomDisplay2 = MyDisplay2.draw
_G.gestureCustomDisplay2 = MyDisplay2.gesture
_G.invalidateCustomDisplay2 = MyDisplay2.invalidate
_G.onTapCustomDisplay2 = MyDisplay2.onTap
_G.onUpdateCustomDisplay2 = MyDisplay2.onUpdate
_G.onReleaseCustomDisplay2 = MyDisplay2.onRelease
_G.onCancelCustomDisplay2 = MyDisplay2.onCancel
return ____exports
 end,
}
return require("display", ...)
