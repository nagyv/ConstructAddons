"use strict";

{
	////////////////////////////////////////////
	// The plugin ID is how Construct identifies different kinds of plugins.
	// *** NEVER CHANGE THE PLUGIN ID! ***
	// If you change the plugin ID after releasing the plugin, Construct will think it is an entirely different
	// plugin and assume it is incompatible with the old one, and YOU WILL BREAK ALL EXISTING PROJECTS USING THE PLUGIN.
	// Only the plugin name is displayed in the editor, so to rename your plugin change the name but NOT the ID.
	// If you want to completely replace a plugin, make it deprecated (it will be hidden but old projects keep working),
	// and create an entirely new plugin with a different plugin ID.
	const PLUGIN_ID = "FunkyQuad";
	////////////////////////////////////////////

	const PLUGIN_VERSION = "0.5.3.0";
	const PLUGIN_CATEGORY = "general";

	let app = null;

	const PLUGIN_CLASS = SDK.Plugins.FunkyQuad = class FunkyQuad extends SDK.IPluginBase
	{
		constructor()
		{
			super(PLUGIN_ID);

			SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

			this._info.SetName(lang(".name"));
			this._info.SetDescription(lang(".description"));
			this._info.SetVersion(PLUGIN_VERSION);
			this._info.SetCategory(PLUGIN_CATEGORY);
			this._info.SetAuthor("Mikal");
			this._info.SetHelpUrl(lang(".help-url"));
			this._info.SetPluginType("world");			// mark as world plugin, which can draw
			this._info.SetIsResizable(true);			// allow to be resized
			this._info.SetIsRotatable(true);			// allow to be rotated
			this._info.SetHasImage(true);
			this._info.SetSupportsEffects(true);		// allow effects
			this._info.SetMustPreDraw(true);

			// Support both the C2 and C3 runtimes
			this._info.SetSupportedRuntimes(["c3"]);

			SDK.Lang.PushContext(".properties");

			this._info.SetProperties([
				new SDK.PluginProperty("link", "edit-image", {
					linkCallback: function (sdkType) {
						sdkType.GetObjectType().EditImage();
					},
					callbackType: "once-for-type"
				}),
				new SDK.PluginProperty("link", "make-original-size", {
					linkCallback: function (sdkInst) {
						sdkInst.OnMakeOriginalSize();
					},
					callbackType: "for-each-instance"
				}),
				new SDK.PluginProperty("integer", "test-property", 0)
			]);

			SDK.Lang.PopContext();		// .properties

			SDK.Lang.PopContext();
		}
	};

	PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
