import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={255}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.846 2.4H9.8V15h-.954V8.97H1.52V15H.566V2.4h.954v5.67h7.326V2.4ZM20.363 6h.918v9h-.918v-2.034a4.242 4.242 0 0 1-1.584 1.638c-.672.396-1.434.594-2.286.594-1.284 0-2.382-.45-3.294-1.35-.912-.912-1.368-2.028-1.368-3.348 0-1.32.456-2.43 1.368-3.33.912-.912 2.01-1.368 3.294-1.368.852 0 1.614.198 2.286.594.672.396 1.2.942 1.584 1.638V6Zm-6.516 7.218c.744.744 1.65 1.116 2.718 1.116s1.968-.372 2.7-1.116c.732-.744 1.098-1.65 1.098-2.718s-.366-1.974-1.098-2.718c-.732-.744-1.632-1.116-2.7-1.116-1.068 0-1.974.372-2.718 1.116-.732.744-1.098 1.65-1.098 2.718s.366 1.974 1.098 2.718ZM34.76 6h.918v9h-.918v-4.068h-5.616V15h-.9V6h.9v4.068h5.616V6Zm7.519 9.198c-1.32 0-2.442-.45-3.366-1.35-.912-.912-1.368-2.028-1.368-3.348 0-1.32.456-2.43 1.368-3.33.924-.912 2.046-1.368 3.366-1.368 1.308 0 2.418.456 3.33 1.368.924.9 1.386 2.01 1.386 3.33 0 1.32-.462 2.436-1.386 3.348-.912.9-2.022 1.35-3.33 1.35Zm-2.718-1.98c.744.744 1.65 1.116 2.718 1.116s1.968-.372 2.7-1.116c.732-.744 1.098-1.65 1.098-2.718s-.366-1.974-1.098-2.718c-.732-.744-1.632-1.116-2.7-1.116-1.068 0-1.974.372-2.718 1.116-.732.744-1.098 1.65-1.098 2.718s.366 1.974 1.098 2.718ZM57.555 6v9h-.918V7.368l-3.366 5.31h-.126L49.76 7.332V15h-.9V6h1.062l3.276 5.166L56.475 6h1.08Zm6.517-.198c1.32 0 2.388.468 3.203 1.404.828.936 1.242 2.046 1.242 3.33 0 .048-.005.12-.017.216v.216h-8.154c.108 1.008.51 1.824 1.206 2.448.708.612 1.578.918 2.61.918.72 0 1.35-.15 1.89-.45.54-.3.947-.696 1.223-1.188l.792.468c-.371.624-.9 1.122-1.583 1.494-.684.36-1.465.54-2.34.54-1.38 0-2.515-.438-3.403-1.314-.888-.888-1.331-2.016-1.331-3.384 0-1.344.432-2.46 1.296-3.348.875-.9 1.997-1.35 3.365-1.35Zm0 .864c-1.02 0-1.873.318-2.556.954-.684.636-1.075 1.458-1.17 2.466h7.236c-.096-1.068-.48-1.902-1.152-2.502a3.35 3.35 0 0 0-2.359-.918Zm11.02-.864c1.295 0 2.393.456 3.293 1.368.912.9 1.368 2.01 1.368 3.33 0 1.32-.456 2.436-1.368 3.348-.9.9-1.998 1.35-3.294 1.35-.852 0-1.62-.204-2.304-.612a4.21 4.21 0 0 1-1.566-1.674V18.6h-.9V6h.9v2.088a4.21 4.21 0 0 1 1.566-1.674c.684-.408 1.452-.612 2.304-.612Zm-2.773 7.416c.744.744 1.65 1.116 2.718 1.116s1.968-.372 2.7-1.116c.744-.744 1.116-1.65 1.116-2.718s-.372-1.974-1.116-2.718c-.732-.744-1.632-1.116-2.7-1.116-1.068 0-1.974.372-2.718 1.116-.732.744-1.098 1.65-1.098 2.718s.366 1.974 1.098 2.718Z"
      fill="#828282"
    />
    <Path
      d="M82.739 7.386a.783.783 0 0 1-.576.234.783.783 0 0 1-.576-.234.783.783 0 0 1-.234-.576c0-.228.078-.42.234-.576A.783.783 0 0 1 82.163 6c.228 0 .42.078.576.234a.783.783 0 0 1 .234.576c0 .228-.078.42-.234.576Zm0 7.56a.783.783 0 0 1-.576.234.783.783 0 0 1-.576-.234.783.783 0 0 1-.234-.576c0-.228.078-.42.234-.576a.783.783 0 0 1 .576-.234c.228 0 .42.078.576.234a.783.783 0 0 1 .234.576c0 .228-.078.42-.234.576Z"
      fill="#E0E0E0"
    />
    <Path
      d="M97.052 7.944v1.494H93.92v3.132h-1.494V9.438h-3.114V7.944h3.114V4.83h1.494v3.114h3.132Zm.907-5.544h7.866v1.494L101.235 15h-1.746l4.554-11.016h-6.084V2.4Zm18.024 14.4c-1.32-2.64-1.98-5.34-1.98-8.1s.66-5.46 1.98-8.1h1.566c-1.32 2.64-1.98 5.34-1.98 8.1s.66 5.46 1.98 8.1h-1.566Zm12.201-10.404c0 .972-.258 1.818-.774 2.538h.018L123.36 15h-1.89l2.988-4.41a7.248 7.248 0 0 1-.612.036c-1.272 0-2.316-.39-3.132-1.17-.804-.792-1.206-1.812-1.206-3.06s.402-2.262 1.206-3.042c.816-.792 1.86-1.188 3.132-1.188s2.31.396 3.114 1.188c.816.78 1.224 1.794 1.224 3.042Zm-6.282-1.908c-.492.48-.738 1.116-.738 1.908 0 .792.246 1.434.738 1.926.504.48 1.152.72 1.944.72s1.434-.24 1.926-.72c.504-.492.756-1.134.756-1.926s-.246-1.428-.738-1.908-1.14-.72-1.944-.72c-.792 0-1.44.24-1.944.72Zm7.936-2.088h7.866v1.494L133.114 15h-1.746l4.554-11.016h-6.084V2.4Zm16.492 6.084a3.69 3.69 0 0 1 1.44 1.26c.348.528.522 1.128.522 1.8 0 1.152-.402 2.058-1.206 2.718-.804.648-1.842.972-3.114.972-1.26 0-2.292-.324-3.096-.972-.804-.66-1.206-1.566-1.206-2.718 0-.672.174-1.272.522-1.8a3.69 3.69 0 0 1 1.44-1.26c-1.032-.648-1.548-1.566-1.548-2.754 0-1.14.378-2.016 1.134-2.628.768-.624 1.686-.936 2.754-.936 1.08 0 1.998.312 2.754.936.768.612 1.152 1.488 1.152 2.628 0 1.188-.516 2.106-1.548 2.754Zm-2.358-4.716c-.636 0-1.17.168-1.602.504-.42.336-.63.834-.63 1.494 0 .636.216 1.134.648 1.494.432.348.96.522 1.584.522.624 0 1.152-.174 1.584-.522.432-.36.648-.858.648-1.494 0-.66-.21-1.158-.63-1.494-.42-.336-.954-.504-1.602-.504Zm0 9.864c.804 0 1.446-.186 1.926-.558.492-.384.738-.93.738-1.638 0-.696-.246-1.23-.738-1.602-.48-.384-1.122-.576-1.926-.576-.792 0-1.434.192-1.926.576-.48.372-.72.906-.72 1.602 0 .708.24 1.254.72 1.638.492.372 1.134.558 1.926.558Zm8.015 3.168h-1.566c1.32-2.64 1.98-5.34 1.98-8.1s-.66-5.46-1.98-8.1h1.566c1.32 2.64 1.98 5.34 1.98 8.1s-.66 5.46-1.98 8.1Zm18.781-3.348c-.852 1.188-2.046 1.782-3.582 1.782s-2.73-.594-3.582-1.782c-.852-1.188-1.278-2.772-1.278-4.752s.426-3.564 1.278-4.752c.852-1.188 2.046-1.782 3.582-1.782s2.73.594 3.582 1.782c.852 1.188 1.278 2.772 1.278 4.752s-.426 3.564-1.278 4.752Zm-5.94-1.134c.552.852 1.338 1.278 2.358 1.278s1.806-.426 2.358-1.278c.564-.852.846-2.058.846-3.618s-.282-2.766-.846-3.618c-.552-.864-1.338-1.296-2.358-1.296s-1.806.426-2.358 1.278c-.552.852-.828 2.064-.828 3.636 0 1.56.276 2.766.828 3.618Zm19.088-1.278v1.566h-1.53V15h-1.674v-2.394h-6.426V11.04l4.518-8.64h1.8l-4.518 8.64h4.626V7.476h1.674v3.564h1.53Zm8.776-2.556a3.69 3.69 0 0 1 1.44 1.26c.348.528.522 1.128.522 1.8 0 1.152-.402 2.058-1.206 2.718-.804.648-1.842.972-3.114.972-1.26 0-2.292-.324-3.096-.972-.804-.66-1.206-1.566-1.206-2.718 0-.672.174-1.272.522-1.8a3.69 3.69 0 0 1 1.44-1.26c-1.032-.648-1.548-1.566-1.548-2.754 0-1.14.378-2.016 1.134-2.628.768-.624 1.686-.936 2.754-.936 1.08 0 1.998.312 2.754.936.768.612 1.152 1.488 1.152 2.628 0 1.188-.516 2.106-1.548 2.754Zm-2.358-4.716c-.636 0-1.17.168-1.602.504-.42.336-.63.834-.63 1.494 0 .636.216 1.134.648 1.494.432.348.96.522 1.584.522.624 0 1.152-.174 1.584-.522.432-.36.648-.858.648-1.494 0-.66-.21-1.158-.63-1.494-.42-.336-.954-.504-1.602-.504Zm0 9.864c.804 0 1.446-.186 1.926-.558.492-.384.738-.93.738-1.638 0-.696-.246-1.23-.738-1.602-.48-.384-1.122-.576-1.926-.576-.792 0-1.434.192-1.926.576-.48.372-.72.906-.72 1.602 0 .708.24 1.254.72 1.638.492.372 1.134.558 1.926.558Zm7.348-3.402V8.718h6.57v1.512h-6.57Zm13.756-3.474c1.26 0 2.298.396 3.114 1.188.816.78 1.224 1.794 1.224 3.042 0 1.248-.408 2.268-1.224 3.06-.816.792-1.854 1.188-3.114 1.188-1.272 0-2.316-.396-3.132-1.188-.804-.792-1.206-1.812-1.206-3.06 0-.972.252-1.812.756-2.52l4.05-6.066h1.908l-2.97 4.392c.264-.024.462-.036.594-.036Zm-1.944 6.156c.504.48 1.152.72 1.944.72s1.434-.24 1.926-.72c.504-.492.756-1.134.756-1.926s-.252-1.428-.756-1.908c-.492-.48-1.134-.72-1.926-.72-.804 0-1.452.24-1.944.72s-.738 1.116-.738 1.908c0 .792.246 1.434.738 1.926Zm12.471-5.598c1.188 0 2.19.354 3.006 1.062.828.696 1.242 1.662 1.242 2.898 0 1.224-.42 2.19-1.26 2.898-.84.708-1.86 1.062-3.06 1.062-.96 0-1.818-.228-2.574-.684-.756-.468-1.284-1.14-1.584-2.016l1.422-.81c.168.612.492 1.08.972 1.404.48.312 1.068.468 1.764.468.792 0 1.434-.204 1.926-.612.492-.408.738-.978.738-1.71s-.246-1.302-.738-1.71c-.492-.42-1.122-.63-1.89-.63h-3.564l.468-6.534h6.894v1.566h-5.382l-.216 3.348h1.836Zm7.264 2.916V8.718h6.57v1.512h-6.57Zm7.972-7.83h7.866v1.494L240.477 15h-1.746l4.554-11.016h-6.084V2.4Zm9.824 0h7.866v1.494L250.301 15h-1.746l4.554-11.016h-6.084V2.4Z"
      fill="#565FFF"
    />
  </Svg>
);

export default SvgComponent;
