"use strict";

{
	const PLUGIN_CLASS = SDK.Plugins.FunkyQuad;

	PLUGIN_CLASS.Type = class FunkyQuadType extends SDK.ITypeBase
	{
		constructor(sdkPlugin, iObjectType)
		{
			super(sdkPlugin, iObjectType);
		}
	};
}
