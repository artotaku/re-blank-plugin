const customDisplayPropertyIndex = 0;
const customDisplayName = 'CustomDisplay2';

export const draw: jbox_display.draw = (
	property_values: jbox_display.PropertyValue[],
	display_info: jbox_display.DisplayInfo,
	dirty_rect: jbox_display.Rectangle) => {

	const propertyValue: jbox_display.PropertyValue = property_values[customDisplayPropertyIndex];
	jbox.trace(customDisplayName + ':draw: ' + propertyValue);

	const color: jbox_display.Color = propertyValue === 0
		? { r: 255, g: 0, b: 0 }
		: { r: 0, g: 255, b: 50 };

	const rect: jbox_display.Rectangle = { top: 2, left: 2, bottom: 20, right: 30 };

	jbox_display.draw_rect(rect, color);
	jbox_display.draw_text(rect, 'center', '' + propertyValue, 'Small LCD font', { r: 255, g: 255, b: 255 });
};

export const gesture: jbox_display.recognize_gesture = (
	property_values: jbox_display.PropertyValue[],
	display_info: jbox_display.DisplayInfo,
	gesture_start_point: jbox_display.Point) => {
	return {
		handlers: {
			on_tap: 'onTap' + customDisplayName,
			on_update: 'onUpdate' + customDisplayName,
			on_release: 'onRelease' + customDisplayName,
			on_cancel: 'onCancel' + customDisplayName
		}
	};
};

export const invalidate: jbox_display.invalidate = (
	property_values: jbox_display.PropertyValue[],
	last_property_values: jbox_display.PropertyValue[],
	display_info: jbox_display.DisplayInfo) => {
	if (display_info) {
		jbox_display.invalidate({ top: 0, left: 0, right: display_info?.width, bottom: display_info?.height });
	}
};

export const onTap: jbox_display.on_tap = (
	property_values: jbox_display.PropertyValue[],
	display_info: jbox_display.DisplayInfo,
	gesture_info: jbox_display.GestureInfo,
	custom_data: jbox_display.CustomData) => {
	const propertyValue: jbox_display.PropertyValue = property_values[customDisplayPropertyIndex];
	jbox.trace(customDisplayName + ':onTap: ' + propertyValue);
	return {
		property_changes: [
			propertyValue === 0 ? 1 : 0
		],
		gesture_ui_name: jbox.ui_text('gesture_ui_name_' + customDisplayName)
	};
};


export const onUpdate: jbox_display.on_update = (
	property_values: jbox_display.PropertyValue[],
	display_info: jbox_display.DisplayInfo,
	gesture_info: jbox_display.GestureInfo,
	custom_data: jbox_display.CustomData) => {
	jbox.trace(customDisplayName + ':onUpdate');
	return {
	};
};

export const onRelease: jbox_display.on_release = (
	property_values: jbox_display.PropertyValue[],
	display_info: jbox_display.DisplayInfo,
	gesture_info: jbox_display.GestureInfo,
	custom_data: jbox_display.CustomData) => {
	jbox.trace(customDisplayName + ':onRelease');
	return {
	};
};

export const onCancel: jbox_display.on_cancel = (
	property_values: jbox_display.PropertyValue[],
	display_info: jbox_display.DisplayInfo,
	gesture_info: jbox_display.GestureInfo,
	custom_data: jbox_display.CustomData) => {
	jbox.trace(customDisplayName + ':onCancel');
	return {
	};
};