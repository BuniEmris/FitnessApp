import * as React from 'react'
import Svg, { G, Rect, Path, Defs, LinearGradient, Stop, SvgProps } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props: SvgProps) => (
  <Svg width={390} height={250} fill="none" {...props}>
    <G filter="url(#a)">
      <Rect x={15} width={360} height={60} rx={15} fill="url(#b)" />
    </G>
    <Path
      d="M159.485 23.4V36h-2.484V25.776h-4.446V36h-2.484V23.4h9.414Zm9.906 11.484c-.924.912-2.052 1.368-3.384 1.368-1.332 0-2.46-.456-3.384-1.368-.912-.924-1.368-2.052-1.368-3.384 0-1.332.456-2.454 1.368-3.366.924-.924 2.052-1.386 3.384-1.386 1.332 0 2.46.462 3.384 1.386.924.912 1.386 2.034 1.386 3.366 0 1.332-.462 2.46-1.386 3.384Zm-5.13-1.602c.468.468 1.05.702 1.746.702s1.278-.234 1.746-.702c.468-.468.702-1.062.702-1.782s-.234-1.314-.702-1.782c-.468-.468-1.05-.702-1.746-.702s-1.278.234-1.746.702c-.456.468-.684 1.062-.684 1.782s.228 1.314.684 1.782ZM180.076 36h-2.682l-1.944-2.736L173.488 36h-2.682l3.294-4.59-3.15-4.41h2.682l1.818 2.538L177.268 27h2.664l-3.15 4.392L180.076 36Zm7.027-9h2.484l-3.276 9c-.912 2.532-2.496 3.732-4.752 3.6v-2.16c.612.012 1.092-.102 1.44-.342.36-.24.648-.642.864-1.206L180.227 27h2.466l2.412 6.048L187.103 27Zm11.126 6.822h1.188v4.59h-2.268V36h-5.58v2.412h-2.268v-4.59h1.098c.516-.768.774-1.83.774-3.186V27h7.056v6.822Zm-5.346 0h3.078v-4.734h-2.52v1.548c0 1.272-.186 2.334-.558 3.186Zm9.615-1.368c.312 1.128 1.158 1.692 2.538 1.692.888 0 1.56-.3 2.016-.9l1.872 1.08c-.888 1.284-2.196 1.926-3.924 1.926-1.488 0-2.682-.45-3.582-1.35-.9-.9-1.35-2.034-1.35-3.402 0-1.356.444-2.484 1.332-3.384.888-.912 2.028-1.368 3.42-1.368 1.32 0 2.406.456 3.258 1.368.864.912 1.296 2.04 1.296 3.384 0 .3-.03.618-.09.954h-6.786Zm-.036-1.8h4.59c-.132-.612-.408-1.068-.828-1.368-.408-.3-.876-.45-1.404-.45-.624 0-1.14.162-1.548.486-.408.312-.678.756-.81 1.332ZM216.899 27h2.322v9h-2.322v-3.42h-3.582V36h-2.322v-9h2.322v3.402h3.582V27Zm10.947 0h1.728v9h-2.268v-5.112L223.076 36h-1.728v-9h2.268v5.112l4.23-5.112Zm5.818 5.454c.312 1.128 1.158 1.692 2.538 1.692.888 0 1.56-.3 2.016-.9l1.872 1.08c-.888 1.284-2.196 1.926-3.924 1.926-1.488 0-2.682-.45-3.582-1.35-.9-.9-1.35-2.034-1.35-3.402 0-1.356.444-2.484 1.332-3.384.888-.912 2.028-1.368 3.42-1.368 1.32 0 2.406.456 3.258 1.368.864.912 1.296 2.04 1.296 3.384 0 .3-.03.618-.09.954h-6.786Zm-.036-1.8h4.59c-.132-.612-.408-1.068-.828-1.368-.408-.3-.876-.45-1.404-.45-.624 0-1.14.162-1.548.486-.408.312-.678.756-.81 1.332Z"
      fill="#fff"
    />
    <G opacity={0.5}>
      <G filter="url(#c)">
        <Rect x={15} y={75} width={360} height={60} rx={15} fill="url(#d)" />
      </G>
      <Path
        d="M123.415 98.4V111h-2.484v-10.224h-4.446V111h-2.484V98.4h9.414Zm9.906 11.484c-.924.912-2.052 1.368-3.384 1.368-1.332 0-2.46-.456-3.384-1.368-.912-.924-1.368-2.052-1.368-3.384 0-1.332.456-2.454 1.368-3.366.924-.924 2.052-1.386 3.384-1.386 1.332 0 2.46.462 3.384 1.386.924.912 1.386 2.034 1.386 3.366 0 1.332-.462 2.46-1.386 3.384Zm-5.13-1.602c.468.468 1.05.702 1.746.702s1.278-.234 1.746-.702c.468-.468.702-1.062.702-1.782s-.234-1.314-.702-1.782c-.468-.468-1.05-.702-1.746-.702s-1.278.234-1.746.702c-.456.468-.684 1.062-.684 1.782s.228 1.314.684 1.782Zm15.898.54h1.188v4.59h-2.268V111h-5.58v2.412h-2.268v-4.59h1.098c.516-.768.774-1.83.774-3.186V102h7.056v6.822Zm-5.346 0h3.078v-4.734h-2.52v1.548c0 1.272-.186 2.334-.558 3.186Zm16.244 0h1.188v4.59h-2.268V111h-5.58v2.412h-2.268v-4.59h1.098c.516-.768.774-1.83.774-3.186V102h7.056v6.822Zm-5.346 0h3.078v-4.734h-2.52v1.548c0 1.272-.186 2.334-.558 3.186Zm9.614-1.368c.312 1.128 1.158 1.692 2.538 1.692.888 0 1.56-.3 2.016-.9l1.872 1.08c-.888 1.284-2.196 1.926-3.924 1.926-1.488 0-2.682-.45-3.582-1.35-.9-.9-1.35-2.034-1.35-3.402 0-1.356.444-2.484 1.332-3.384.888-.912 2.028-1.368 3.42-1.368 1.32 0 2.406.456 3.258 1.368.864.912 1.296 2.04 1.296 3.384 0 .3-.03.618-.09.954h-6.786Zm-.036-1.8h4.59c-.132-.612-.408-1.068-.828-1.368-.408-.3-.876-.45-1.404-.45-.624 0-1.14.162-1.548.486-.408.312-.678.756-.81 1.332Zm13.771-3.906c1.212 0 2.244.462 3.096 1.386.864.912 1.296 2.034 1.296 3.366 0 1.332-.432 2.46-1.296 3.384-.852.912-1.884 1.368-3.096 1.368-1.26 0-2.232-.438-2.916-1.314v4.662h-2.322V102h2.322v1.062c.684-.876 1.656-1.314 2.916-1.314Zm-2.214 6.588c.468.468 1.062.702 1.782.702s1.314-.234 1.782-.702c.48-.48.72-1.092.72-1.836s-.24-1.35-.72-1.818c-.468-.48-1.062-.72-1.782-.72s-1.314.24-1.782.72c-.468.468-.702 1.074-.702 1.818s.234 1.356.702 1.836ZM190.449 111h-2.61l-2.754-4.032V111h-2.268v-4.032L180.063 111h-2.592l3.24-4.554-3.06-4.446h2.592l2.574 3.906V102h2.268v3.906l2.574-3.906h2.61l-3.078 4.446 3.258 4.554Zm7.399-9h2.322v9h-2.322v-1.062c-.696.876-1.674 1.314-2.934 1.314-1.2 0-2.232-.456-3.096-1.368-.852-.924-1.278-2.052-1.278-3.384 0-1.332.426-2.454 1.278-3.366.864-.924 1.896-1.386 3.096-1.386 1.26 0 2.238.438 2.934 1.314V102Zm-4.284 6.336c.468.468 1.062.702 1.782.702s1.314-.234 1.782-.702c.48-.48.72-1.092.72-1.836s-.24-1.35-.72-1.818c-.468-.48-1.062-.72-1.782-.72s-1.314.24-1.782.72c-.468.468-.702 1.074-.702 1.818s.234 1.356.702 1.836ZM208.18 102h2.322v9h-2.322v-3.42h-3.582V111h-2.322v-9h2.322v3.402h3.582V102Zm10.947 0h1.728v9h-2.268v-5.112l-4.23 5.112h-1.728v-9h2.268v5.112l4.23-5.112Zm5.818 5.454c.312 1.128 1.158 1.692 2.538 1.692.888 0 1.56-.3 2.016-.9l1.872 1.08c-.888 1.284-2.196 1.926-3.924 1.926-1.488 0-2.682-.45-3.582-1.35-.9-.9-1.35-2.034-1.35-3.402 0-1.356.444-2.484 1.332-3.384.888-.912 2.028-1.368 3.42-1.368 1.32 0 2.406.456 3.258 1.368.864.912 1.296 2.04 1.296 3.384 0 .3-.03.618-.09.954h-6.786Zm-.036-1.8h4.59c-.132-.612-.408-1.068-.828-1.368-.408-.3-.876-.45-1.404-.45-.624 0-1.14.162-1.548.486-.408.312-.678.756-.81 1.332Zm19.513.738c.84.408 1.26 1.092 1.26 2.052 0 .756-.264 1.374-.792 1.854-.516.468-1.254.702-2.214.702h-4.734v-9h4.374c.948 0 1.68.234 2.196.702.528.468.792 1.08.792 1.836 0 .792-.294 1.41-.882 1.854Zm-2.322-2.484h-1.98v1.62h1.98c.66 0 .99-.27.99-.81s-.33-.81-.99-.81Zm.306 5.13c.672 0 1.008-.288 1.008-.864a.72.72 0 0 0-.27-.594c-.18-.144-.426-.216-.738-.216h-2.286v1.674h2.286Zm6.691-1.584c.312 1.128 1.158 1.692 2.538 1.692.888 0 1.56-.3 2.016-.9l1.872 1.08c-.888 1.284-2.196 1.926-3.924 1.926-1.488 0-2.682-.45-3.582-1.35-.9-.9-1.35-2.034-1.35-3.402 0-1.356.444-2.484 1.332-3.384.888-.912 2.028-1.368 3.42-1.368 1.32 0 2.406.456 3.258 1.368.864.912 1.296 2.04 1.296 3.384 0 .3-.03.618-.09.954h-6.786Zm-.036-1.8h4.59c-.132-.612-.408-1.068-.828-1.368-.408-.3-.876-.45-1.404-.45-.624 0-1.14.162-1.548.486-.408.312-.678.756-.81 1.332Zm12.747 5.598c-1.356 0-2.49-.456-3.402-1.368-.9-.912-1.35-2.04-1.35-3.384 0-1.344.45-2.472 1.35-3.384.912-.912 2.046-1.368 3.402-1.368.876 0 1.674.21 2.394.63.72.42 1.266.984 1.638 1.692l-1.998 1.17a2.023 2.023 0 0 0-.828-.882 2.332 2.332 0 0 0-1.224-.324c-.696 0-1.272.234-1.728.702-.456.456-.684 1.044-.684 1.764 0 .708.228 1.296.684 1.764.456.456 1.032.684 1.728.684.468 0 .882-.102 1.242-.306.372-.216.648-.51.828-.882l2.016 1.152a4.575 4.575 0 0 1-1.674 1.71c-.72.42-1.518.63-2.394.63ZM273.803 102h2.322v9h-2.322v-1.062c-.696.876-1.674 1.314-2.934 1.314-1.2 0-2.232-.456-3.096-1.368-.852-.924-1.278-2.052-1.278-3.384 0-1.332.426-2.454 1.278-3.366.864-.924 1.896-1.386 3.096-1.386 1.26 0 2.238.438 2.934 1.314V102Zm-4.284 6.336c.468.468 1.062.702 1.782.702s1.314-.234 1.782-.702c.48-.48.72-1.092.72-1.836s-.24-1.35-.72-1.818c-.468-.48-1.062-.72-1.782-.72s-1.314.24-1.782.72c-.468.468-.702 1.074-.702 1.818s.234 1.356.702 1.836Z"
        fill="#fff"
      />
    </G>
    <G opacity={0.5}>
      <G filter="url(#e)">
        <Rect x={15} y={150} width={360} height={60} rx={15} fill="url(#f)" />
      </G>
      <Path
        d="M153.236 173.4h2.466V186h-2.466v-5.22h-4.68V186h-2.484v-12.6h2.484v5.004h4.68V173.4Zm11.539 3.6h2.322v9h-2.322v-1.062c-.696.876-1.674 1.314-2.934 1.314-1.2 0-2.232-.456-3.096-1.368-.852-.924-1.278-2.052-1.278-3.384 0-1.332.426-2.454 1.278-3.366.864-.924 1.896-1.386 3.096-1.386 1.26 0 2.238.438 2.934 1.314V177Zm-4.284 6.336c.468.468 1.062.702 1.782.702s1.314-.234 1.782-.702c.48-.48.72-1.092.72-1.836s-.24-1.35-.72-1.818c-.468-.48-1.062-.72-1.782-.72s-1.314.24-1.782.72c-.468.468-.702 1.074-.702 1.818s.234 1.356.702 1.836Zm12.978 2.916c-1.416 0-2.562-.456-3.438-1.368-.864-.912-1.296-2.07-1.296-3.474 0-1.536.228-2.718.684-3.546.456-.84 1.374-1.602 2.754-2.286.204-.096.492-.228.864-.396.372-.18.624-.306.756-.378.144-.072.336-.18.576-.324.24-.144.408-.27.504-.378.108-.12.222-.27.342-.45.12-.18.216-.378.288-.594l1.908 1.098c-.156.732-.51 1.302-1.062 1.71-.54.396-1.356.804-2.448 1.224-.768.3-1.326.6-1.674.9-.348.3-.6.66-.756 1.08.672-.684 1.572-1.026 2.7-1.026.996 0 1.884.366 2.664 1.098.78.72 1.17 1.68 1.17 2.88 0 1.236-.42 2.25-1.26 3.042-.828.792-1.92 1.188-3.276 1.188Zm-1.656-2.736c.444.408.99.612 1.638.612.648 0 1.182-.198 1.602-.594.42-.396.63-.9.63-1.512s-.21-1.116-.63-1.512c-.42-.408-.96-.612-1.62-.612a2.48 2.48 0 0 0-1.584.558c-.456.372-.684.87-.684 1.494 0 .636.216 1.158.648 1.566Zm15.271 1.368c-.924.912-2.052 1.368-3.384 1.368-1.332 0-2.46-.456-3.384-1.368-.912-.924-1.368-2.052-1.368-3.384 0-1.332.456-2.454 1.368-3.366.924-.924 2.052-1.386 3.384-1.386 1.332 0 2.46.462 3.384 1.386.924.912 1.386 2.034 1.386 3.366 0 1.332-.462 2.46-1.386 3.384Zm-5.13-1.602c.468.468 1.05.702 1.746.702s1.278-.234 1.746-.702c.468-.468.702-1.062.702-1.782s-.234-1.314-.702-1.782c-.468-.468-1.05-.702-1.746-.702s-1.278.234-1.746.702c-.456.468-.684 1.062-.684 1.782s.228 1.314.684 1.782Zm13.387-6.534c1.212 0 2.244.462 3.096 1.386.864.912 1.296 2.034 1.296 3.366 0 1.332-.432 2.46-1.296 3.384-.852.912-1.884 1.368-3.096 1.368-1.26 0-2.232-.438-2.916-1.314v4.662h-2.322V177h2.322v1.062c.684-.876 1.656-1.314 2.916-1.314Zm-2.214 6.588c.468.468 1.062.702 1.782.702s1.314-.234 1.782-.702c.48-.48.72-1.092.72-1.836s-.24-1.35-.72-1.818c-.468-.48-1.062-.72-1.782-.72s-1.314.24-1.782.72c-.468.468-.702 1.074-.702 1.818s.234 1.356.702 1.836Zm19.224-1.944c.84.408 1.26 1.092 1.26 2.052 0 .756-.264 1.374-.792 1.854-.516.468-1.254.702-2.214.702h-4.734v-9h4.374c.948 0 1.68.234 2.196.702.528.468.792 1.08.792 1.836 0 .792-.294 1.41-.882 1.854Zm-2.322-2.484h-1.98v1.62h1.98c.66 0 .99-.27.99-.81s-.33-.81-.99-.81Zm.306 5.13c.672 0 1.008-.288 1.008-.864a.72.72 0 0 0-.27-.594c-.18-.144-.426-.216-.738-.216h-2.286v1.674h2.286Zm6.691-1.584c.312 1.128 1.158 1.692 2.538 1.692.888 0 1.56-.3 2.016-.9l1.872 1.08c-.888 1.284-2.196 1.926-3.924 1.926-1.488 0-2.682-.45-3.582-1.35-.9-.9-1.35-2.034-1.35-3.402 0-1.356.444-2.484 1.332-3.384.888-.912 2.028-1.368 3.42-1.368 1.32 0 2.406.456 3.258 1.368.864.912 1.296 2.04 1.296 3.384 0 .3-.03.618-.09.954h-6.786Zm-.036-1.8h4.59c-.132-.612-.408-1.068-.828-1.368-.408-.3-.876-.45-1.404-.45-.624 0-1.14.162-1.548.486-.408.312-.678.756-.81 1.332Zm12.747 5.598c-1.356 0-2.49-.456-3.402-1.368-.9-.912-1.35-2.04-1.35-3.384 0-1.344.45-2.472 1.35-3.384.912-.912 2.046-1.368 3.402-1.368.876 0 1.674.21 2.394.63.72.42 1.266.984 1.638 1.692l-1.998 1.17a2.023 2.023 0 0 0-.828-.882 2.332 2.332 0 0 0-1.224-.324c-.696 0-1.272.234-1.728.702-.456.456-.684 1.044-.684 1.764 0 .708.228 1.296.684 1.764.456.456 1.032.684 1.728.684.468 0 .882-.102 1.242-.306.372-.216.648-.51.828-.882l2.016 1.152a4.575 4.575 0 0 1-1.674 1.71c-.72.42-1.518.63-2.394.63ZM241.732 177h2.322v9h-2.322v-1.062c-.696.876-1.674 1.314-2.934 1.314-1.2 0-2.232-.456-3.096-1.368-.852-.924-1.278-2.052-1.278-3.384 0-1.332.426-2.454 1.278-3.366.864-.924 1.896-1.386 3.096-1.386 1.26 0 2.238.438 2.934 1.314V177Zm-4.284 6.336c.468.468 1.062.702 1.782.702s1.314-.234 1.782-.702c.48-.48.72-1.092.72-1.836s-.24-1.35-.72-1.818c-.468-.48-1.062-.72-1.782-.72s-1.314.24-1.782.72c-.468.468-.702 1.074-.702 1.818s.234 1.356.702 1.836Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={21.092}
        y1={60}
        x2={372.823}
        y2={-5.24}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F2521F" />
        <Stop offset={1} stopColor="#FF8D4E" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={21.092}
        y1={135}
        x2={372.823}
        y2={69.76}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F2521F" />
        <Stop offset={1} stopColor="#FF8D4E" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={21.092}
        y1={210}
        x2={372.823}
        y2={144.76}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FA5C01" />
        <Stop offset={1} stopColor="#FF8D4E" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SvgComponent