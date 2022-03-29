import * as MyDisplay2 from "./display-as-functions";
import { CustomDisplay } from "./custom-display";
import { CustomDisplayClassExample } from "./display-class-example";

declare const _G: any;

_G.format_version = '1.0';

/**
 * Assigns the interface methods of an instance of a custom display that implements CustomDisplay interface to the global scope
 * A wrapper function is necessary because of the this/self of an instance method.
 */
_G.registerGlobal = function (customDisplay: CustomDisplay, name: string): void {

	_G['draw' + name] = function (this: void, property_values: jbox_display.PropertyValue[], display_info: jbox_display.DisplayInfo, dirty_rect: jbox_display.Rectangle): void {
		customDisplay.draw(property_values, display_info, dirty_rect);
	}

	_G['invalidate' + name] = function (this: void, property_values: jbox_display.PropertyValue[], last_property_values: jbox_display.PropertyValue[], display_info: jbox_display.DisplayInfo): void {
		customDisplay.invalidate(property_values, last_property_values, display_info);
	}

	_G['gesture' + name] = function (this: void, property_values: jbox_display.PropertyValue[], display_info: jbox_display.DisplayInfo, gesture_start_point: jbox_display.Point): jbox_display.GestureDefinition {
		return customDisplay.recognizeGesture(property_values, display_info, gesture_start_point);
	}

	_G['onTap' + name] = function (this: void, property_values: jbox_display.PropertyValue[], display_info: jbox_display.DisplayInfo, gesture_info: jbox_display.GestureInfo, custom_data: jbox_display.CustomData): jbox_display.GestureHandlerResult {
		return customDisplay.onTap(property_values, display_info, gesture_info, custom_data);
	}

	_G['onUpdate' + name] = function (this: void, property_values: jbox_display.PropertyValue[], display_info: jbox_display.DisplayInfo, gesture_info: jbox_display.GestureInfo, custom_data: jbox_display.CustomData): jbox_display.GestureHandlerResult {
		return customDisplay.onUpdate(property_values, display_info, gesture_info, custom_data);
	}

	_G['onRelease' + name] = function (this: void, property_values: jbox_display.PropertyValue[], display_info: jbox_display.DisplayInfo, gesture_info: jbox_display.GestureInfo, custom_data: jbox_display.CustomData): jbox_display.GestureHandlerResult {
		return customDisplay.onRelease(property_values, display_info, gesture_info, custom_data);
	}
}

// Two instance of a display - created as an instance of a class that implements the jbox_display.CustomDisplay interface
const name1a = 'CustomDisplayClassExampleInstance1';
const customDisplay1a = new CustomDisplayClassExample(name1a);
_G.registerGlobal(customDisplay1a, name1a);

const name1b = 'CustomDisplayClassExampleInstance2';
const customDisplay1b = new CustomDisplayClassExample(name1b);
_G.registerGlobal(customDisplay1b, name1b);


// Display 2 - exported callback functions are assigned to global scope
const name2 = 'CustomDisplay2';
_G['draw' + name2] = MyDisplay2.draw;
_G['gesture' + name2] = MyDisplay2.recognizeGesture;
_G['invalidate' + name2] = MyDisplay2.invalidate;
_G['onTap' + name2] = MyDisplay2.onTap;
_G['onUpdate' + name2] = MyDisplay2.onUpdate;
_G['onRelease' + name2] = MyDisplay2.onRelease;
_G['onCancel' + name2] = MyDisplay2.onCancel;
