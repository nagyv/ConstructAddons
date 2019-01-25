// Effect made by Mikal based on: https://learnopengl.com/Advanced-Lighting/Parallax-Mapping
precision mediump float;

// Effect common variables
varying mediump vec2 vTex;
uniform lowp sampler2D samplerFront;
uniform lowp sampler2D samplerBack;
uniform mediump vec2 destStart;
uniform mediump vec2 destEnd;
uniform mediump vec2 srcEnd;
uniform mediump vec2 srcStart;
uniform mediump vec2 srcOriginStart;
uniform mediump vec2 srcOriginEnd;

// Effect parameters
uniform float ViewXPosition;
uniform float ViewYPosition;
uniform float ViewZPosition;
uniform float HeightScale;
uniform float WindowXResolution;
uniform float WindowYResolution;

// Effect variables
vec2 Resolution;
vec3 ViewPos;

void main(void)
{

	float TextureWidth = srcOriginEnd.x -  srcOriginStart.x;

if (vTex.x <= srcOriginStart.x+0.5*TextureWidth-0.02*TextureWidth)
// Perform ParllaxMap on base
{
	// Texture coords of depth map
	mediump vec2 vTexDepth = vTex;
	// DepthMap is offset by 50% in U(X) in sprite texture
	vTexDepth.x = vTexDepth.x + 0.5*TextureWidth;

	// Retrieve front and back pixels
	lowp vec4 front = texture2D(samplerFront, vTex);
	// Depth map stored in offsite of sprite texture
	lowp vec4 frontDepth = texture2D(samplerFront, vTexDepth);
	lowp float Height = frontDepth.r;

// *************************************************************************************************************
// Start - ParallaxMapping *********************************************************************************************
// *************************************************************************************************************


	//Delta position of Light
	ViewPos.x = ViewXPosition;
	ViewPos.y = ViewYPosition;
	ViewPos.y = 1.0 - ViewPos.y;
	ViewPos.z = ViewZPosition;
	Resolution.x = WindowXResolution;
	Resolution.y = WindowYResolution;
	vec3 ViewDir = vec3(ViewPos.xy - (gl_FragCoord.xy / Resolution.xy), ViewPos.z);

	//Correct for aspect ratio
	ViewDir.x *= Resolution.x / Resolution.y;

	//normalize our vectors
	vec3 L = normalize(ViewDir);

  // Change texture sample based on original sample height and viewdir (L)
  vec2 p = L.xy / L.z * (Height * HeightScale);
  vTexDepth = vTex - p;

	// Clamp to source texture boundaries
	vTexDepth = clamp(vTexDepth, srcOriginStart, srcOriginEnd);
  lowp vec4 DepthFront = texture2D(samplerFront, vTexDepth);

	// Display Parllax adjusted texture, do not display Depth Map stored adjacent to base texture
	gl_FragColor =  DepthFront;
} else
// Depth Map, just pass back color through
{
	mediump vec2 n = (vTex - srcStart) / (srcEnd - srcStart);
	lowp vec4 back = texture2D(samplerBack, mix(destStart, destEnd, n));
	gl_FragColor =  back;
}
}
