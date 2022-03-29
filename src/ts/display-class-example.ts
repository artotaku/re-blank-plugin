import { CustomDisplay } from "./custom-display";

const customDisplayPropertyIndex = 0;

export class CustomDisplayClassExample implements CustomDisplay {

	constructor(private customDisplayName: string) {
	}

	draw(
		property_values: jbox_display.PropertyValue[],
		display_info: jbox_display.DisplayInfo,
		dirty_rect: jbox_display.Rectangle): void {

		const propertyValue: jbox_display.PropertyValue = property_values[customDisplayPropertyIndex];
		jbox.trace(this.customDisplayName + ':draw: ' + propertyValue);

		const color: jbox_display.Color = propertyValue === 0
			? { r: 255, g: 0, b: 0 }
			: { r: 0, g: 255, b: 50 };

		const rect: jbox_display.Rectangle = { top: 2, left: 2, bottom: 20, right: 30 };

		jbox_display.draw_rect(rect, color);
		jbox_display.draw_text(rect, 'center', '' + propertyValue, 'Small LCD font', { r: 255, g: 255, b: 255 });
	};

	recognizeGesture(
		property_values: jbox_display.PropertyValue[],
		display_info: jbox_display.DisplayInfo,
		gesture_start_point: jbox_display.Point): jbox_display.GestureDefinition {
		return {
			handlers: {
				on_tap: 'onTap' + this.customDisplayName,
				on_update: 'onUpdate' + this.customDisplayName,
				on_release: 'onRelease' + this.customDisplayName,
				on_cancel: 'onCancel' + this.customDisplayName
			}
		};
	};

	invalidate(
		property_values: jbox_display.PropertyValue[],
		last_property_values: jbox_display.PropertyValue[],
		display_info: jbox_display.DisplayInfo): void {
		if (display_info) {
			jbox_display.invalidate({ top: 0, left: 0, right: display_info?.width, bottom: display_info?.height });
		}
	};

	onTap(
		property_values: jbox_display.PropertyValue[],
		display_info: jbox_display.DisplayInfo,
		gesture_info: jbox_display.GestureInfo,
		custom_data: jbox_display.CustomData): jbox_display.GestureHandlerResult {
		const propertyValue: jbox_display.PropertyValue = property_values[customDisplayPropertyIndex];
		jbox.trace(this.customDisplayName + ':onTap: ' + propertyValue);
		return {
			property_changes: [
				propertyValue === 0 ? 1 : 0
			],
			gesture_ui_name: jbox.ui_text('gesture_ui_name_' + this.customDisplayName)
		};
	};

	onUpdate(
		property_values: jbox_display.PropertyValue[],
		display_info: jbox_display.DisplayInfo,
		gesture_info: jbox_display.GestureInfo,
		custom_data: jbox_display.CustomData): jbox_display.GestureHandlerResult {
		jbox.trace(this.customDisplayName + ':onUpdate');
		return {
		};
	};

	onRelease(
		property_values: jbox_display.PropertyValue[],
		display_info: jbox_display.DisplayInfo,
		gesture_info: jbox_display.GestureInfo,
		custom_data: jbox_display.CustomData): jbox_display.GestureHandlerResult {
		jbox.trace(this.customDisplayName + ':onRelease');
		return {
		};
	};

	onCancel(
		property_values: jbox_display.PropertyValue[],
		display_info: jbox_display.DisplayInfo,
		gesture_info: jbox_display.GestureInfo,
		custom_data: jbox_display.CustomData): jbox_display.GestureHandlerResult {
		jbox.trace(this.customDisplayName + ':onCancel');
		return {
		};
	};
}