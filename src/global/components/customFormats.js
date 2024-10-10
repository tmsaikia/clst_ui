// src/customFormats.js
import Quill from 'quill';

// Register custom formats
const Inline = Quill.import('blots/inline');

class LineHeight extends Inline {
  static create(value) {
    let node = super.create();
    node.style.lineHeight = value;
    return node;
  }

  static formats(node) {
    return node.style.lineHeight || false;
  }

  format(name, value) {
    if (name === 'lineheight' && value) {
      this.domNode.style.lineHeight = value;
    } else {
      super.format(name, value);
    }
  }
}

class LetterSpacing extends Inline {
  static create(value) {
    let node = super.create();
    node.style.letterSpacing = value;
    return node;
  }

  static formats(node) {
    return node.style.letterSpacing || false;
  }

  format(name, value) {
    if (name === 'letterspacing' && value) {
      this.domNode.style.letterSpacing = value;
    } else {
      super.format(name, value);
    }
  }
}

class FontWeight extends Inline {
  static create(value) {
    let node = super.create();
    node.style.fontWeight = value;
    return node;
  }

  static formats(node) {
    return node.style.fontWeight || false;
  }

  format(name, value) {
    if (name === 'fontweight' && value) {
      this.domNode.style.fontWeight = value;
    } else {
      super.format(name, value);
    }
  }
}

class TextShadow extends Inline {
  static create(value) {
    let node = super.create();
    node.style.textShadow = value;
    return node;
  }

  static formats(node) {
    return node.style.textShadow || false;
  }

  format(name, value) {
    if (name === 'textshadow' && value) {
      this.domNode.style.textShadow = value;
    } else {
      super.format(name, value);
    }
  }
}

Quill.register(LineHeight);
Quill.register(LetterSpacing);
Quill.register(FontWeight);
Quill.register(TextShadow);
