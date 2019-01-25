/////////////////////////////////////////////////////////
// DepthMask effect
varying mediump vec2 vTex;
uniform lowp sampler2D samplerFront;

uniform lowp float pixelWidth;
uniform lowp float pixelHeight;
uniform lowp float LimitFront;
uniform lowp float LimitBack;
uniform lowp float InvertMask;
uniform mediump vec2 pixelSize;
uniform mediump vec2 srcEnd;
uniform mediump vec2 srcStart;
uniform mediump vec2 srcOriginStart;
uniform mediump vec2 srcOriginEnd;
uniform mediump vec2 layoutStart;
uniform mediump vec2 layoutEnd;
uniform lowp sampler2D samplerBack;
uniform mediump vec2 destStart;
uniform mediump vec2 destEnd;

void main(void)
{
	mediump vec2 tex = vTex;

	mediump vec2 n = (vTex - srcStart) / (srcEnd - srcStart);

	lowp vec4 back = texture2D(samplerBack, mix(destStart, destEnd, n));
	lowp vec4 front = texture2D(samplerFront, vTex);
	// Get alpha channel
	lowp float DepthAlpha = front.a;

	// Remove transparentcy from front sample (texture)
	front.a = 1.0;

	// Apply Alpha Range Mask, pixels within range show front (texture), when InvertMask = 0.0
	// InvertMask = 1.0, do opposite, can experiment between 0.0 and 1.0 for different effects
	lowp vec4 backFinal = ((DepthAlpha > LimitFront) && (DepthAlpha <= LimitBack)) ? front * (1.0-InvertMask) + back * (InvertMask) : back * (1.0-InvertMask) + front * (InvertMask);

	gl_FragColor = backFinal;

}
