import * as MyDisplay1 from "./display1";
import * as MyDisplay2 from "./display2";

declare const _G: any;

_G.format_version = '1.0';

// Display 1
_G.drawCustomDisplay1 = MyDisplay1.draw;
_G.gestureCustomDisplay1 = MyDisplay1.gesture;
_G.invalidateCustomDisplay1 = MyDisplay1.invalidate;
_G.onTapCustomDisplay1 = MyDisplay1.onTap;
_G.onUpdateCustomDisplay1 = MyDisplay1.onUpdate;
_G.onReleaseCustomDisplay1 = MyDisplay1.onRelease;
_G.onCancelCustomDisplay1 = MyDisplay1.onCancel;

// Display 2
_G.drawCustomDisplay2 = MyDisplay2.draw;
_G.gestureCustomDisplay2 = MyDisplay2.gesture;
_G.invalidateCustomDisplay2 = MyDisplay2.invalidate;
_G.onTapCustomDisplay2 = MyDisplay2.onTap;
_G.onUpdateCustomDisplay2 = MyDisplay2.onUpdate;
_G.onReleaseCustomDisplay2 = MyDisplay2.onRelease;
_G.onCancelCustomDisplay2 = MyDisplay2.onCancel;