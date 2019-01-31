"use strict";

{
	C3.Plugins.FunkyQuad.Acts =
	{
		SetQuadPosition(TopLeftX, TopLeftY, TopRightX, TopRightY, BottomLeftX, BottomLeftY, BottomRightX, BottomRightY)
		{
			this._SetQuadTopLeftX = TopLeftX;
			this._SetQuadTopLeftY = TopLeftY;
			this._SetQuadTopRightX = TopRightX;
			this._SetQuadTopRightY = TopRightY;
			this._SetQuadBottomLeftX = BottomLeftX;
			this._SetQuadBottomLeftY = BottomLeftY;
			this._SetQuadBottomRightX = BottomRightX;
			this._SetQuadBottomRightY = BottomRightY;
			this._runtime.UpdateRender();
		},
		SetFQTLX(SetValue)
		{
			this._SetQuadTopLeftX = SetValue;
			this._runtime.UpdateRender();
		},
		SetFQTLY(SetValue)
		{
			this._SetQuadTopLeftY = SetValue;
			this._runtime.UpdateRender();
		},
		SetFQTRX(SetValue)
		{
			this._runtime.UpdateRender();
			this._SetQuadTopRightX = SetValue;
		},
		SetFQTRY(SetValue)
		{
			this._SetQuadTopRightY = SetValue;
			this._runtime.UpdateRender();
		},
		SetFQBLX(SetValue)
		{
			this._SetQuadBottomLeftX = SetValue;
			this._runtime.UpdateRender();
		},
		SetFQBLY(SetValue)
		{
			this._SetQuadBottomLeftY = SetValue;
			this._runtime.UpdateRender();
		},
		SetFQBRX(SetValue)
		{
			this._SetQuadBottomRightX = SetValue;
			this._runtime.UpdateRender();
		},
		SetFQBRY(SetValue)
		{
			this._SetQuadBottomRightY = SetValue;
			this._runtime.UpdateRender();
		}
	};
}
