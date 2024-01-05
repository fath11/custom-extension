// Name: Canvas Effects
// ID: theshovelcanvaseffects
// Description: Apply visual effects to the entire stage.
// By: TheShovel
// create a class that contains the logic from both snippets
let borderRadius = 0;
let rotation = 0;
let offsetY = 0;
let offsetX = 0;
let skewY = 0;
let skewX = 0;
let scale = 100;
// Thanks SharkPool for telling me about these
let transparency = 0;
let sepia = 0;
let blur = 0;
let contrast = 100;
let saturation = 100;
let color = 0;
let brightness = 100;
let invert = 0;
let resizeMode = "default";

  function updateStyle(canvas) {
    // Gotta keep the translation to % because of the stage size, window size and so on
    const transform = `rotate(${rotation}deg) scale(${scale}%) skew(${skewX}deg, ${skewY}deg) translate(${offsetX}%, ${
      0 - offsetY
    }%)`;
    if (canvas.style.transform !== transform) {
      canvas.style.transform = transform;
    }
    const filter = `blur(${blur}px) contrast(${
      contrast / 100
    }) saturate(${saturation}%) hue-rotate(${color}deg) brightness(${brightness}%) invert(${invert}%) sepia(${sepia}%) opacity(${
      100 - transparency
    }%)`;
    if (canvas.style.filter !== filter) {
      canvas.style.filter = filter;
    }
    const cssBorderRadius = borderRadius === 0 ? "" : `${borderRadius}%`;
    if (borderRadius !== cssBorderRadius) {
      borderRadius = cssBorderRadius;
    }
    const imageRendering = canvas.style.resizeMode === "pixelated" ? "pixelated" : "";
    if (canvas.style.imageRendering !== imageRendering) {
      canvas.style.imageRendering = imageRendering;
    }
  }

  function resetStyles(canvas) {
    borderRadius = 0;
    rotation = 0;
    offsetY = 0;
    offsetX = 0;
    skewY = 0;
    skewX = 0;
    scale = 100;
    transparency = 0;
    sepia = 0;
    blur = 0;
    contrast = 100;
    saturation = 100;
    color = 0;
    brightness = 100;
    invert = 0;
    resizeMode = "default";
    updateStyle();
  }

class CanvasEffects {
  constructor(runtime) {
    this.runtime = runtime
    runtime.debug = true
    console.log(runtime)
    console.log(runtime.renderer)
  }
  getInfo() {
    return {
      id: "theshovelcanvaseffects",
      name: "Canvas Effects",
      blocks: [
        {
          opcode: "seteffect",
          blockType: Scratch.BlockType.COMMAND,
          text: "set canvas [EFFECT] to [NUMBER]",
          arguments: {
            EFFECT: {
              type: Scratch.ArgumentType.STRING,
              menu: "EFFECTMENU",
            },
            NUMBER: {
              type: Scratch.ArgumentType.NUMBER,
            },
          },
        },
        {
          opcode: "geteffect",
          blockType: Scratch.BlockType.REPORTER,
          text: "get canvas [EFFECT]",
          arguments: {
            EFFECT: {
              type: Scratch.ArgumentType.STRING,
              menu: "EFFECTGETMENU",
            },
          },
        },
        {
          opcode: "cleareffects",
          blockType: Scratch.BlockType.COMMAND,
          text: "clear canvas effects",
        },
        {
          opcode: "renderscale",
          blockType: Scratch.BlockType.COMMAND,
          text: "set canvas render size to width:[X] height:[Y]",
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 100,
            },
            Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 100,
            },
          },
        },
        {
          opcode: "setrendermode",
          blockType: Scratch.BlockType.COMMAND,
          text: "set canvas resize rendering mode [EFFECT]",
          arguments: {
            EFFECT: {
              type: Scratch.ArgumentType.STRING,
              menu: "RENDERMODE",
            },
          },
        },
      ],
      menus: {
        EFFECTMENU: {
          acceptReporters: true,
          items: [
            "blur",
            "contrast",
            "saturation",
            "color shift",
            "brightness",
            "invert",
            "sepia",
            "transparency",
            "scale",
            "skew X",
            "skew Y",
            "offset X",
            "offset Y",
            "rotation",
            "border radius",
          ],
        },
        RENDERMODE: {
          acceptReporters: true,
          items: ["pixelated", "default"],
        },
        EFFECTGETMENU: {
          acceptReporters: true,
          // this contains 'resize rendering mode', EFFECTMENU does not
          items: [
            "blur",
            "contrast",
            "saturation",
            "color shift",
            "brightness",
            "invert",
            "resize rendering mode",
            "sepia",
            "transparency",
            "scale",
            "skew X",
            "skew Y",
            "offset X",
            "offset Y",
            "rotation",
            "border radius",
          ],
        },
      },
    };
  }
  geteffect({ EFFECT }) {
    if (EFFECT === "blur") {
      return blur;
    } else if (EFFECT === "contrast") {
      return contrast;
    } else if (EFFECT === "saturation") {
      return saturation;
    } else if (EFFECT === "color shift") {
      return color;
    } else if (EFFECT === "brightness") {
      return brightness;
    } else if (EFFECT === "invert") {
      return invert;
    } else if (EFFECT === "resize rendering mode") {
      return resizeMode;
    } else if (EFFECT === "sepia") {
      return sepia;
    } else if (EFFECT === "transparency") {
      return transparency;
    } else if (EFFECT === "scale") {
      return scale;
    } else if (EFFECT === "skew X") {
      return skewX;
    } else if (EFFECT === "skew Y") {
      return skewY;
    } else if (EFFECT === "offset X") {
      return offsetX;
    } else if (EFFECT === "offset Y") {
      return offsetY;
    } else if (EFFECT === "rotation") {
      return rotation;
    } else if (EFFECT === "border radius") {
      return borderRadius;
    }
    return "";
  }
  seteffect({ EFFECT, NUMBER }) {
    NUMBER = Scratch.Cast.toNumber(NUMBER);
    if (EFFECT === "blur") {
      blur = NUMBER;
    } else if (EFFECT === "contrast") {
      contrast = NUMBER;
    } else if (EFFECT === "saturation") {
      saturation = NUMBER;
    } else if (EFFECT === "color shift") {
      color = NUMBER;
    } else if (EFFECT === "brightness") {
      brightness = NUMBER;
    } else if (EFFECT === "invert") {
      invert = NUMBER;
    } else if (EFFECT === "sepia") {
      sepia = NUMBER;
    } else if (EFFECT === "transparency") {
      transparency = NUMBER;
    } else if (EFFECT === "scale") {
      scale = NUMBER;
    } else if (EFFECT === "skew X") {
      skewX = NUMBER;
    } else if (EFFECT === "skew Y") {
      skewY = NUMBER;
    } else if (EFFECT === "offset X") {
      offsetX = NUMBER;
    } else if (EFFECT === "offset Y") {
      offsetY = NUMBER;
    } else if (EFFECT === "rotation") {
      rotation = NUMBER;
    } else if (EFFECT === "border radius") {
      borderRadius = NUMBER;
    }
    updateStyle(this.runtime.renderer.canvas);
  }
  cleareffects() {
    resetStyles(this.runtime.renderer.canvas);
  }
  setrendermode({ EFFECT }) {
    resizeMode = EFFECT;
    updateStyle(this.runtime.renderer.canvas);
  }
  renderscale({ X, Y }) {
    this.runtime.renderer.resize(X, Y);
  }
}

window.tempExt = {
  Extension: CanvasEffects,
  info: {
    name: 'hcn.extensionName',
    description: 'hcn.description',
    extensionId: 'theshovelcanvaseffects',
    // iconURL: cover,
    // insetIconURL: icon,
    featured: true,
    disabled: false,
    collaborator: 'name',
    collaboratorList: [
        {
            collaborator: 'name',
            collaboratorURL: 'url'
        },
    ]
  },
  l10n: {
    'zh-cn': {
      'hcn.extensionName': 'hcn 的测试',
      'hcn.description': 'hcn 的测试',
    },
    en: {
      'hcn.extensionName': 'hcn test',
      'hcn.description': 'hcn test',
    },
  },
}
