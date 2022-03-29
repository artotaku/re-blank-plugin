/**
	* A contract for custom display callback functions to be shared between custom display providers and consumers.
	* A provider may publish an implementation of this interface via npm.
	* 
	* Consumer can import the implementation from the npm module and use it.
	*/
export interface CustomDisplay {

	draw(property_values: jbox_display.PropertyValue[], display_info: jbox_display.DisplayInfo, dirty_rect: jbox_display.Rectangle): void;

	recognizeGesture(property_values: jbox_display.PropertyValue[], display_info: jbox_display.DisplayInfo, gesture_start_point: jbox_display.Point): jbox_display.GestureDefinition;

	invalidate(property_values: jbox_display.PropertyValue[], last_property_values: jbox_display.PropertyValue[], display_info: jbox_display.DisplayInfo): void;

	onTap(property_values: jbox_display.PropertyValue[], display_info: jbox_display.DisplayInfo, gesture_info: jbox_display.GestureInfo,
		custom_data: jbox_display.CustomData): jbox_display.GestureHandlerResult;

	onUpdate(property_values: jbox_display.PropertyValue[], display_info: jbox_display.DisplayInfo, gesture_info: jbox_display.GestureInfo,
		custom_data: jbox_display.CustomData): jbox_display.GestureHandlerResult;

	onRelease(property_values: jbox_display.PropertyValue[], display_info: jbox_display.DisplayInfo, gesture_info: jbox_display.GestureInfo,
		custom_data: jbox_display.CustomData): jbox_display.GestureHandlerResult;

	onCancel(property_values: jbox_display.PropertyValue[], display_info: jbox_display.DisplayInfo, gesture_info: jbox_display.GestureInfo,
		custom_data: jbox_display.CustomData): jbox_display.GestureHandlerResult;

}