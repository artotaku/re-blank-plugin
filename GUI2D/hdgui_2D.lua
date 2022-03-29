-- Copyright (c) 2020 pongasoft
--
-- Licensed under the Apache License, Version 2.0 (the "License"); you may not
-- use this file except in compliance with the License. You may obtain a copy of
-- the License at
--
-- http://www.apache.org/licenses/LICENSE-2.0
--
-- Unless required by applicable law or agreed to in writing, software
-- distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
-- WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
-- License for the specific language governing permissions and limitations under
-- the License.
--
-- @author Yan Pujante
format_version = "2.0"

--------------------------------------------------------------------------
-- Front
--------------------------------------------------------------------------
front = jbox.panel{
    graphics = {
        node = "Bg",
    },
    widgets = {
        -- device name / tape
        jbox.device_name{
            graphics = {
                node = "TapeFront",
            },
        },
    }
}

front.widgets[#front.widgets + 1] = jbox.custom_display{
    graphics = {
        node = "CustomDisplayClassExampleInstance1"
    },
    display_width_pixels = 40,
    display_height_pixels = 20,
    draw_function = "drawCustomDisplayClassExampleInstance1",
    gesture_function = "gestureCustomDisplayClassExampleInstance1",
    invalidate_function = "invalidateCustomDisplayClassExampleInstance1",
    values = {
        "/custom_properties/customDisplayProperty"
    }
}

front.widgets[#front.widgets + 1] = jbox.custom_display{
    graphics = {
        node = "CustomDisplayClassExampleInstance2"
    },
    display_width_pixels = 40,
    display_height_pixels = 20,
    draw_function = "drawCustomDisplayClassExampleInstance2",
    gesture_function = "gestureCustomDisplayClassExampleInstance2",
    invalidate_function = "invalidateCustomDisplayClassExampleInstance2",
    values = {
        "/custom_properties/customDisplayProperty"
    }
}

front.widgets[#front.widgets + 1] = jbox.custom_display{
    graphics = {
        node = "CustomDisplay2"
    },
    display_width_pixels = 40,
    display_height_pixels = 20,
    draw_function = "drawCustomDisplay2",
    gesture_function = "gestureCustomDisplay2",
    invalidate_function = "invalidateCustomDisplay2",
    values = {
        "/custom_properties/customDisplayProperty"
    }
}

--------------------------------------------------------------------------
-- Back
--------------------------------------------------------------------------
back = jbox.panel{
    graphics = {
        node = "Bg"
    },
    widgets = {
        -- device name / tape
        jbox.device_name{
            graphics = {
                node = "TapeBack",
            },
        },
        
        -- placeholder
        jbox.placeholder{
            graphics = {
                node = "Placeholder",
            },
        },
        
        -- audio output
        jbox.audio_output_socket{
            graphics = {
                node = "audioOutputStereoPairLeft",
            },
            socket = "/audio_outputs/audioOutLeft",
        },
        jbox.audio_output_socket{
            graphics = {
                node = "audioOutputStereoPairRight",
            },
            socket = "/audio_outputs/audioOutRight",
        },
    
    -- audio input
    --    jbox.audio_input_socket {
    --      graphics = {
    --        node = "audioInputStereoPairLeft",
    --      },
    --      socket = "/audio_inputs/audioInputLeft",
    --    },
    --    jbox.audio_input_socket {
    --      graphics = {
    --        node = "audioInputStereoPairRight",
    --      },
    --      socket = "/audio_inputs/audioInputRight",
    --    },
    }
}

--------------------------------------------------------------------------
-- Folded Front
--------------------------------------------------------------------------
folded_front = jbox.panel{
    graphics = {
        node = "Bg",
    },
    widgets = {
        -- device name / tape
        jbox.device_name{
            graphics = {
                node = "TapeFoldedFront",
            },
        },
    }
}

--------------------------------------------------------------------------
-- Folded Back
--------------------------------------------------------------------------
folded_back = jbox.panel{
    graphics = {
        node = "Bg",
    },
    cable_origin = {
        node = "CableOrigin",
    },
    widgets = {
        -- device name / tape
        jbox.device_name{
            graphics = {
                node = "TapeFoldedBack",
            },
        },
    },
}
