const format_version = '1.0';

const customDisplayPropertyIndex = 0;

const drawCustomDisplay: jbox_display.draw = (
	property_values: jbox_display.PropertyValue[],
	display_info: jbox_display.DisplayInfo,
	dirty_rect: jbox_display.Rectangle) => {

	const propertyValue: jbox_display.PropertyValue = property_values[customDisplayPropertyIndex];
	jbox.trace('draw: ' + propertyValue);

	const color: jbox_display.Color = propertyValue === 0
		? { r: 255, g: 0, b: 0 } 
		: { r: 0, g: 255, b: 50 };

	const rect: jbox_display.Rectangle = { top: 2, left: 2, bottom: 20, right: 30 };

	jbox_display.draw_rect(rect, color);
	jbox_display.draw_text(rect, 'center', '' + propertyValue, 'Small LCD font', { r: 255, g: 255, b: 255});
};

const gestureCustomDisplay: jbox_display.recognize_gesture = (
	property_values: jbox_display.PropertyValue[],
	display_info: jbox_display.DisplayInfo,
	gesture_start_point: jbox_display.Point) => {
	return {
		handlers: {
			on_tap: 'onTapCustomDisplay',
			on_update: 'onUpdateCustomDisplay',
			on_release: 'onReleaseCustomDisplay',
			on_cancel: 'onCancelCustomDisplay'
		}
	};
};

const invalidateCustomDisplay: jbox_display.invalidate = (
	property_values: jbox_display.PropertyValue[],
	last_property_values: jbox_display.PropertyValue[],
	display_info: jbox_display.DisplayInfo) => {
	if (display_info) {
		jbox_display.invalidate({ top: 0, left: 0, right: display_info?.width, bottom: display_info?.height });
	}
};

const onTapCustomDisplay: jbox_display.on_tap = (
	property_values: jbox_display.PropertyValue[],
	display_info: jbox_display.DisplayInfo,
	gesture_info: jbox_display.GestureInfo,
	custom_data: jbox_display.CustomData) => {
	const propertyValue: jbox_display.PropertyValue = property_values[customDisplayPropertyIndex];
	jbox.trace('onTap: ' + propertyValue);
	return {
		property_changes: [
			propertyValue === 0 ? 1 : 0
		],
		gesture_ui_name: jbox.ui_text('gesture_ui_name_CustomDisplay')
	};
};


const onUpdateCustomDisplay: jbox_display.on_update = (
	property_values: jbox_display.PropertyValue[],
	display_info: jbox_display.DisplayInfo,
	gesture_info: jbox_display.GestureInfo,
	custom_data: jbox_display.CustomData) => {
	jbox.trace('onUpdate');
	return {
	};
};

const onReleaseCustomDisplay: jbox_display.on_release = (
	property_values: jbox_display.PropertyValue[],
	display_info: jbox_display.DisplayInfo,
	gesture_info: jbox_display.GestureInfo,
	custom_data: jbox_display.CustomData) => {
	jbox.trace('onRelease');
	return {
	};
};

const onCancelCustomDisplay: jbox_display.on_cancel = (
	property_values: jbox_display.PropertyValue[],
	display_info: jbox_display.DisplayInfo,
	gesture_info: jbox_display.GestureInfo,
	custom_data: jbox_display.CustomData) => {
	jbox.trace('onCancel');
	return {
	};
};