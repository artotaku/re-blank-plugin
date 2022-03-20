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

format_version = "1.0"

--[[ 
Custom properties
--]]
custom_properties = jbox.property_set {
  document_owner = {
    properties = {
      customDisplayProperty = jbox.number{
        default = 0,
        ui_name = jbox.ui_text("customDisplayProperty"),
        ui_type = jbox.ui_selector({jbox.UI_TEXT_OFF, jbox.UI_TEXT_ON}),
        steps = 2,
        persistence = "patch"
      }
    }
  },
	
  rtc_owner = {
    properties = {
      instance = jbox.native_object{ },
    }
  },	
	
  rt_owner = {
    properties = {
    }
  }
}

--[[ 
Inputs/Outputs
--]]

audio_outputs = {
  audioOutLeft = jbox.audio_output {
    ui_name = jbox.ui_text("audio out main left")
  },
  audioOutRight = jbox.audio_output {
    ui_name = jbox.ui_text("audio out main right")
  }
}

-- defines routing pairs for stereo (Reason will wire left and right automatically)

jbox.add_stereo_audio_routing_pair {
  left = "/audio_outputs/audioOutLeft",
  right = "/audio_outputs/audioOutRight"
}
