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
		},
		SetFQTLY(SetValue)
		{
			this._SetQuadTopLeftY = SetValue;
		},
		SetFQTRX(SetValue)
		{
			this._SetQuadTopRightX = SetValue;
		},
		SetFQTRY(SetValue)
		{
			this._SetQuadTopRightY = SetValue;
		},
		SetFQBLX(SetValue)
		{
			this._SetQuadBottomLeftX = SetValue;
		},
		SetFQBLY(SetValue)
		{
			this._SetQuadBottomLeftY = SetValue;
		},
		SetFQBRX(SetValue)
		{
			this._SetQuadBottomRightX = SetValue;
		},
		SetFQBRY(SetValue)
		{
			this._SetQuadBottomRightY = SetValue;
		}
	};
}
