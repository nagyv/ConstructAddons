"use strict";

{
	const tempQuad = new C3.Quad();

	C3.Plugins.FunkyQuad.Instance = class DrawingInstance extends C3.SDKWorldInstanceBase
	{
		constructor(inst, properties)
		{
			super(inst);

			this._SetQuadTopLeftX = 0;
			this._SetQuadTopLeftY = 0;
			this._SetQuadTopRightX = 0;
			this._SetQuadTopRightY = 0;
			this._SetQuadBottomLeftX = 0;
			this._SetQuadBottomLeftY = 0;
			this._SetQuadBottomRightX = 0;
			this._SetQuadBottomRightY = 0;

		}

		Release()
		{
			super.Release();
		}

		Draw(renderer)
		{
			const imageInfo = this._objectClass.GetImageInfo();
			const texture = imageInfo.GetTexture();

			if (!texture)
				return;			// dynamic texture load which hasn't completed yet; can't draw anything

			const wi = this.GetWorldInfo();
//			const quad = wi.GetBoundingQuad();
			let quad = wi.GetBoundingQuad();
			quad.set(this._SetQuadTopLeftX, this._SetQuadTopLeftY, this._SetQuadTopRightX, this._SetQuadTopRightY, this._SetQuadBottomRightX, this._SetQuadBottomRightY, this._SetQuadBottomLeftX, this._SetQuadBottomLeftY);

			const rcTex = imageInfo.GetTexRect();

			renderer.SetTexture(texture);

			if (this._runtime.IsPixelRoundingEnabled())
			{
				const ox = Math.round(wi.GetX()) - wi.GetX();
				const oy = Math.round(wi.GetY()) - wi.GetY();
				tempQuad.copy(quad);
				tempQuad.offset(ox, oy);
				renderer.Quad3(tempQuad, rcTex);
			}
			else
			{
				renderer.Quad3(quad, rcTex);
			}
		}

		SaveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}

		LoadFromJson(o)
		{
			// load state for savegames
		}
	};

}
