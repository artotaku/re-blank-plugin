const format_version = '1.0';

const drawCustomDisplay: jbox_display.draw = (
	property_values: jbox_display.PropertyValues,
	display_info: jbox_display.PropertyValues,
	dirty_rect: jbox_display.Rectangle) => {
	jbox.trace('draw');
	jbox_display.draw_rect({ top: 2, left: 2, bottom: 20, right: 30 }, { r: 255, g: 100, b: 50 });
};

const gestureCustomDisplay: jbox_display.recognize_gesture = (
	property_values: jbox_display.PropertyValues,
	display_info: jbox_display.DisplayInfo,
	gesture_start_point: jbox_display.Point) => {
	return {
		handlers: {
			on_tap: 'onTapLowLevelApiDisplay',
			on_update: 'onUpdateLowLevelApiDisplay',
			on_release: 'onReleaseLowLevelApiDisplay',
			on_cancel: 'onCancelLowLevelApiDisplay'
		}
	};
};

const invalidateCustomDisplay: jbox_display.invalidate = (
	property_values: jbox_display.PropertyValues, 
	last_property_values: jbox_display.PropertyValues, 
	display_info: jbox_display.DisplayInfo) => {
	if (display_info) {
		jbox_display.invalidate({ top: 0, left: 0, right: display_info?.width, bottom: display_info?.height });
	}
};

const onTapCustomDisplay: jbox_display.on_tap = (
	property_values: jbox_display.PropertyValues,
	display_info: jbox_display.DisplayInfo,
	gesture_info: jbox_display.GestureInfo,
	custom_data: jbox_display.CustomData) => {
	jbox.trace('onTap');
	return {
	};
};


const onUpdateCustomDisplay: jbox_display.on_update = (
	property_values: jbox_display.PropertyValues,
	display_info: jbox_display.DisplayInfo,
	gesture_info: jbox_display.GestureInfo,
	custom_data: jbox_display.CustomData) => {
	jbox.trace('onUpdate');
	return {
	};
};

const onReleaseCustomDisplay: jbox_display.on_release = (
	property_values: jbox_display.PropertyValues,
	display_info: jbox_display.DisplayInfo,
	gesture_info: jbox_display.GestureInfo,
	custom_data: jbox_display.CustomData) => {
	jbox.trace('onRelease');
	return {
	};
};

const onCancelCustomDisplay: jbox_display.on_cancel = (
	property_values: jbox_display.PropertyValues,
	display_info: jbox_display.DisplayInfo,
	gesture_info: jbox_display.GestureInfo,
	custom_data: jbox_display.CustomData) => {
	jbox.trace('onCancel');
	return {
	};
};