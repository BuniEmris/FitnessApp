import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={356}
    height={182}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.688 47.562c1.595.919 2.392 2.305 2.392 4.16 0 1.543-.546 2.808-1.638 3.796C12.35 56.506 11.007 57 9.412 57H1.69V38.8h7.176c1.56 0 2.869.485 3.926 1.456 1.075.953 1.612 2.175 1.612 3.666 0 1.508-.572 2.721-1.716 3.64Zm-3.822-5.408H5.278v4.004h3.588c.555 0 1.014-.19 1.378-.572.381-.381.572-.858.572-1.43s-.182-1.049-.546-1.43c-.364-.381-.832-.572-1.404-.572Zm.546 11.492c.607 0 1.11-.2 1.508-.598.399-.416.598-.936.598-1.56 0-.607-.2-1.11-.598-1.508-.399-.416-.901-.624-1.508-.624H5.278v4.29h4.134Zm13.955 3.718c-1.958 0-3.596-.659-4.914-1.976-1.3-1.317-1.95-2.947-1.95-4.888 0-1.941.65-3.57 1.95-4.888 1.318-1.317 2.956-1.976 4.914-1.976 1.266 0 2.418.303 3.458.91s1.829 1.421 2.366 2.444l-2.886 1.69a2.923 2.923 0 0 0-1.196-1.274c-.52-.312-1.109-.468-1.768-.468-1.005 0-1.837.338-2.496 1.014-.658.659-.988 1.508-.988 2.548 0 1.023.33 1.872.988 2.548.659.659 1.491.988 2.496.988.676 0 1.274-.147 1.794-.442a2.923 2.923 0 0 0 1.196-1.274l2.912 1.664a6.608 6.608 0 0 1-2.418 2.47c-1.04.607-2.192.91-3.458.91Zm9.981-5.486c.45 1.63 1.673 2.444 3.666 2.444 1.283 0 2.253-.433 2.912-1.3l2.704 1.56c-1.283 1.855-3.172 2.782-5.668 2.782-2.15 0-3.874-.65-5.174-1.95-1.3-1.3-1.95-2.938-1.95-4.914 0-1.959.641-3.588 1.924-4.888 1.283-1.317 2.93-1.976 4.94-1.976 1.907 0 3.475.659 4.706 1.976 1.248 1.317 1.872 2.947 1.872 4.888 0 .433-.043.893-.13 1.378h-9.802Zm-.052-2.6h6.63c-.19-.884-.59-1.543-1.196-1.976a3.335 3.335 0 0 0-2.028-.65c-.901 0-1.647.234-2.236.702-.59.45-.98 1.092-1.17 1.924ZM54.214 44v3.224h-5.538V57H45.32V44h8.893Zm12.065 11.388c-1.334 1.317-2.964 1.976-4.888 1.976s-3.553-.659-4.888-1.976c-1.317-1.335-1.976-2.964-1.976-4.888s.659-3.545 1.976-4.862c1.335-1.335 2.964-2.002 4.888-2.002s3.554.667 4.888 2.002c1.335 1.317 2.002 2.938 2.002 4.862s-.667 3.553-2.002 4.888Zm-7.41-2.314c.676.676 1.517 1.014 2.522 1.014 1.006 0 1.846-.338 2.522-1.014.676-.676 1.014-1.534 1.014-2.574 0-1.04-.338-1.898-1.014-2.574-.676-.676-1.516-1.014-2.522-1.014-1.005 0-1.846.338-2.522 1.014-.658.676-.988 1.534-.988 2.574 0 1.04.33 1.898.988 2.574Zm23.418-7.644c1.75 0 3.224.529 4.42 1.586 1.196 1.04 1.794 2.496 1.794 4.368 0 1.872-.633 3.337-1.898 4.394-1.248 1.057-2.782 1.586-4.602 1.586-1.474 0-2.774-.33-3.9-.988-1.127-.659-1.942-1.63-2.444-2.912l3.068-1.794c.45 1.456 1.542 2.184 3.276 2.184.918 0 1.629-.217 2.132-.65.52-.45.78-1.057.78-1.82 0-.745-.252-1.343-.754-1.794-.503-.45-1.188-.676-2.054-.676h-5.512L77.32 38.8h10.322v3.354h-6.994l-.234 3.276h1.872Zm23.758 4.914c1.213.59 1.82 1.577 1.82 2.964 0 1.092-.382 1.985-1.144 2.678-.746.676-1.812 1.014-3.198 1.014h-6.838V44h6.318c1.369 0 2.426.338 3.172 1.014.762.676 1.144 1.56 1.144 2.652 0 1.144-.425 2.037-1.274 2.678Zm-3.354-3.588h-2.86v2.34h2.86c.953 0 1.43-.39 1.43-1.17 0-.78-.477-1.17-1.43-1.17Zm.442 7.41c.97 0 1.456-.416 1.456-1.248 0-.364-.13-.65-.39-.858-.26-.208-.616-.312-1.066-.312h-3.302v2.418h3.302Zm17.607 1.222c-1.335 1.317-2.964 1.976-4.888 1.976s-3.553-.659-4.888-1.976c-1.317-1.335-1.976-2.964-1.976-4.888s.659-3.545 1.976-4.862c1.335-1.335 2.964-2.002 4.888-2.002s3.553.667 4.888 2.002c1.335 1.317 2.002 2.938 2.002 4.862s-.667 3.553-2.002 4.888Zm-7.41-2.314c.676.676 1.517 1.014 2.522 1.014s1.846-.338 2.522-1.014c.676-.676 1.014-1.534 1.014-2.574 0-1.04-.338-1.898-1.014-2.574-.676-.676-1.517-1.014-2.522-1.014s-1.846.338-2.522 1.014c-.659.676-.988 1.534-.988 2.574 0 1.04.329 1.898.988 2.574ZM136.684 44v13h-3.354v-9.854h-5.174V57h-3.354V44h11.882Zm10.339-.364c1.75 0 3.241.667 4.472 2.002 1.248 1.317 1.872 2.938 1.872 4.862s-.624 3.553-1.872 4.888c-1.231 1.317-2.722 1.976-4.472 1.976-1.82 0-3.224-.633-4.212-1.898V62.2h-3.354V44h3.354v1.534c.988-1.265 2.392-1.898 4.212-1.898Zm-3.198 9.516c.676.676 1.534 1.014 2.574 1.014 1.04 0 1.898-.338 2.574-1.014.693-.693 1.04-1.577 1.04-2.652 0-1.075-.347-1.95-1.04-2.626-.676-.693-1.534-1.04-2.574-1.04-1.04 0-1.898.347-2.574 1.04-.676.676-1.014 1.551-1.014 2.626s.338 1.959 1.014 2.652Zm22.683 2.236c-1.335 1.317-2.964 1.976-4.888 1.976s-3.553-.659-4.888-1.976c-1.317-1.335-1.976-2.964-1.976-4.888s.659-3.545 1.976-4.862c1.335-1.335 2.964-2.002 4.888-2.002s3.553.667 4.888 2.002c1.335 1.317 2.002 2.938 2.002 4.862s-.667 3.553-2.002 4.888Zm-7.41-2.314c.676.676 1.517 1.014 2.522 1.014s1.846-.338 2.522-1.014c.676-.676 1.014-1.534 1.014-2.574 0-1.04-.338-1.898-1.014-2.574-.676-.676-1.517-1.014-2.522-1.014s-1.846.338-2.522 1.014c-.659.676-.988 1.534-.988 2.574 0 1.04.329 1.898.988 2.574Zm17.66 4.29c-1.959 0-3.597-.659-4.914-1.976-1.3-1.317-1.95-2.947-1.95-4.888 0-1.941.65-3.57 1.95-4.888 1.317-1.317 2.955-1.976 4.914-1.976 1.265 0 2.418.303 3.458.91s1.828 1.421 2.366 2.444l-2.886 1.69a2.924 2.924 0 0 0-1.196-1.274c-.52-.312-1.11-.468-1.768-.468-1.006 0-1.838.338-2.496 1.014-.659.659-.988 1.508-.988 2.548 0 1.023.329 1.872.988 2.548.658.659 1.49.988 2.496.988.676 0 1.274-.147 1.794-.442a2.924 2.924 0 0 0 1.196-1.274l2.912 1.664a6.608 6.608 0 0 1-2.418 2.47c-1.04.607-2.193.91-3.458.91Zm18.222-1.976c-1.334 1.317-2.964 1.976-4.888 1.976s-3.553-.659-4.888-1.976c-1.317-1.335-1.976-2.964-1.976-4.888s.659-3.545 1.976-4.862c1.335-1.335 2.964-2.002 4.888-2.002s3.554.667 4.888 2.002c1.335 1.317 2.002 2.938 2.002 4.862s-.667 3.553-2.002 4.888Zm-7.41-2.314c.676.676 1.517 1.014 2.522 1.014 1.006 0 1.846-.338 2.522-1.014.676-.676 1.014-1.534 1.014-2.574 0-1.04-.338-1.898-1.014-2.574-.676-.676-1.516-1.014-2.522-1.014-1.005 0-1.846.338-2.522 1.014-.658.676-.988 1.534-.988 2.574 0 1.04.33 1.898.988 2.574Zm20.832-2.73c1.213.59 1.82 1.577 1.82 2.964 0 1.092-.382 1.985-1.144 2.678-.746.676-1.812 1.014-3.198 1.014h-6.838V44h6.318c1.369 0 2.426.338 3.172 1.014.762.676 1.144 1.56 1.144 2.652 0 1.144-.425 2.037-1.274 2.678Zm-3.354-3.588h-2.86v2.34h2.86c.953 0 1.43-.39 1.43-1.17 0-.78-.477-1.17-1.43-1.17Zm.442 7.41c.97 0 1.456-.416 1.456-1.248 0-.364-.13-.65-.39-.858-.26-.208-.616-.312-1.066-.312h-3.302v2.418h3.302ZM226.749 44h3.354v13h-3.354v-4.94h-5.174V57h-3.354V44h3.354v4.914h5.174V44Zm16.007 0h3.354v13h-3.354v-1.534c-1.005 1.265-2.418 1.898-4.238 1.898-1.733 0-3.224-.659-4.472-1.976-1.23-1.335-1.846-2.964-1.846-4.888s.616-3.545 1.846-4.862c1.248-1.335 2.739-2.002 4.472-2.002 1.82 0 3.233.633 4.238 1.898V44Zm-6.188 9.152c.676.676 1.534 1.014 2.574 1.014 1.04 0 1.898-.338 2.574-1.014.694-.693 1.04-1.577 1.04-2.652 0-1.075-.346-1.95-1.04-2.626-.676-.693-1.534-1.04-2.574-1.04-1.04 0-1.898.347-2.574 1.04-.676.676-1.014 1.551-1.014 2.626s.338 1.959 1.014 2.652Zm23.268-9.516c1.976 0 3.596.641 4.862 1.924 1.282 1.265 1.924 2.912 1.924 4.94 0 2.028-.642 3.683-1.924 4.966-1.266 1.265-2.895 1.898-4.888 1.898-1.335 0-2.531-.303-3.588-.91-1.058-.624-1.846-1.447-2.366-2.47l2.834-1.638c.225.537.615.97 1.17 1.3.554.33 1.222.494 2.002.494.728 0 1.369-.19 1.924-.572a3.44 3.44 0 0 0 1.248-1.56h-4.42v-3.016h4.42a3.286 3.286 0 0 0-1.248-1.534c-.555-.399-1.196-.598-1.924-.598-1.526 0-2.574.59-3.146 1.768l-2.834-1.638c.554-1.023 1.352-1.837 2.392-2.444 1.057-.607 2.244-.91 3.562-.91Zm18.617.364v3.224h-4.056V57h-3.354v-9.776h-4.108V44h11.518Zm12.059 11.388c-1.335 1.317-2.964 1.976-4.888 1.976s-3.553-.659-4.888-1.976c-1.317-1.335-1.976-2.964-1.976-4.888s.659-3.545 1.976-4.862c1.335-1.335 2.964-2.002 4.888-2.002s3.553.667 4.888 2.002c1.335 1.317 2.002 2.938 2.002 4.862s-.667 3.553-2.002 4.888Zm-7.41-2.314c.676.676 1.517 1.014 2.522 1.014s1.846-.338 2.522-1.014c.676-.676 1.014-1.534 1.014-2.574 0-1.04-.338-1.898-1.014-2.574-.676-.676-1.517-1.014-2.522-1.014s-1.846.338-2.522 1.014c-.659.676-.988 1.534-.988 2.574 0 1.04.329 1.898.988 2.574Zm13.655-10.738v-2.912h7.54v2.912h-7.54ZM303.959 44h2.496v13h-3.276v-7.384L297.069 57h-2.496V44h3.276v7.384l6.11-7.384ZM7.722 88.364c-1.959 0-3.597-.659-4.914-1.976-1.3-1.317-1.95-2.947-1.95-4.888 0-1.941.65-3.57 1.95-4.888 1.317-1.317 2.955-1.976 4.914-1.976 1.265 0 2.418.303 3.458.91s1.829 1.421 2.366 2.444l-2.886 1.69a2.923 2.923 0 0 0-1.196-1.274c-.52-.312-1.11-.468-1.768-.468-1.005 0-1.837.338-2.496 1.014-.659.659-.988 1.508-.988 2.548 0 1.023.33 1.872.988 2.548.659.659 1.49.988 2.496.988.676 0 1.274-.147 1.794-.442a2.923 2.923 0 0 0 1.196-1.274l2.912 1.664a6.608 6.608 0 0 1-2.418 2.47c-1.04.607-2.193.91-3.458.91ZM25.24 75v3.224h-4.056V88H17.83v-9.776h-4.108V75H25.24Zm9.057-.364c1.75 0 3.241.667 4.472 2.002 1.248 1.317 1.872 2.938 1.872 4.862s-.624 3.553-1.872 4.888c-1.23 1.317-2.721 1.976-4.472 1.976-1.82 0-3.224-.633-4.212-1.898V93.2H26.73V75h3.354v1.534c.988-1.265 2.392-1.898 4.212-1.898Zm-3.198 9.516c.676.676 1.534 1.014 2.574 1.014 1.04 0 1.898-.338 2.574-1.014.693-.693 1.04-1.577 1.04-2.652 0-1.075-.347-1.95-1.04-2.626-.676-.693-1.534-1.04-2.574-1.04-1.04 0-1.898.347-2.574 1.04-.676.676-1.014 1.551-1.014 2.626s.338 1.959 1.014 2.652ZM52.586 75h3.354v13h-3.354v-1.534c-1.005 1.265-2.418 1.898-4.238 1.898-1.733 0-3.224-.659-4.472-1.976-1.23-1.335-1.846-2.964-1.846-4.888s.616-3.545 1.846-4.862c1.248-1.335 2.739-2.002 4.472-2.002 1.82 0 3.233.633 4.238 1.898V75Zm-6.188 9.152c.676.676 1.534 1.014 2.574 1.014 1.04 0 1.898-.338 2.574-1.014.694-.693 1.04-1.577 1.04-2.652 0-1.075-.346-1.95-1.04-2.626-.676-.693-1.534-1.04-2.574-1.04-1.04 0-1.898.347-2.574 1.04-.676.676-1.014 1.551-1.014 2.626s.338 1.959 1.014 2.652ZM67.21 75h3.354v13H67.21v-4.94h-5.174V88h-3.354V75h3.354v4.914h5.174V75Zm15.513 0h2.496v13h-3.276v-7.384L75.833 88h-2.496V75h3.276v7.384L82.723 75Zm16.709 9.854h2.184v6.63H98.34V88H87.992V75h3.354v9.854h4.732V75h3.354v9.854Zm6.328-1.976c.451 1.63 1.673 2.444 3.666 2.444 1.283 0 2.254-.433 2.912-1.3l2.704 1.56c-1.282 1.855-3.172 2.782-5.668 2.782-2.149 0-3.874-.65-5.174-1.95-1.3-1.3-1.95-2.938-1.95-4.914 0-1.959.642-3.588 1.924-4.888 1.283-1.317 2.93-1.976 4.94-1.976 1.907 0 3.476.659 4.706 1.976 1.248 1.317 1.872 2.947 1.872 4.888 0 .433-.043.893-.13 1.378h-9.802Zm-.052-2.6h6.63c-.19-.884-.589-1.543-1.196-1.976a3.333 3.333 0 0 0-2.028-.65c-.901 0-1.646.234-2.236.702-.589.45-.979 1.092-1.17 1.924ZM135.816 75v13h-3.354v-9.854h-5.174V88h-3.354V75h11.882Zm13.849 11.388c-1.335 1.317-2.964 1.976-4.888 1.976s-3.554-.659-4.888-1.976c-1.318-1.335-1.976-2.964-1.976-4.888s.658-3.545 1.976-4.862c1.334-1.335 2.964-2.002 4.888-2.002s3.553.667 4.888 2.002c1.334 1.317 2.002 2.938 2.002 4.862s-.668 3.553-2.002 4.888Zm-7.41-2.314c.676.676 1.516 1.014 2.522 1.014 1.005 0 1.846-.338 2.522-1.014.676-.676 1.014-1.534 1.014-2.574 0-1.04-.338-1.898-1.014-2.574-.676-.676-1.517-1.014-2.522-1.014-1.006 0-1.846.338-2.522 1.014-.659.676-.988 1.534-.988 2.574 0 1.04.329 1.898.988 2.574Zm22.663.78h1.716v6.63h-3.276V88h-8.06v3.484h-3.276v-6.63h1.586c.746-1.11 1.118-2.643 1.118-4.602V75h10.192v9.854Zm-7.722 0h4.446v-6.838h-3.64v2.236c0 1.837-.268 3.371-.806 4.602Zm18.6-3.484c1.317.641 1.976 1.673 1.976 3.094 0 1.11-.459 2.037-1.378 2.782-.919.745-2.21 1.118-3.874 1.118-2.635 0-4.429-1.04-5.382-3.12l2.73-1.612c.416 1.179 1.309 1.768 2.678 1.768.624 0 1.101-.121 1.43-.364.347-.243.52-.572.52-.988 0-.797-.511-1.196-1.534-1.196h-1.846v-2.86h1.404c1.005 0 1.508-.399 1.508-1.196 0-.381-.147-.685-.442-.91-.295-.225-.685-.338-1.17-.338-1.127 0-1.933.546-2.418 1.638l-2.704-1.56c.988-1.993 2.678-2.99 5.07-2.99 1.491 0 2.669.381 3.536 1.144.884.745 1.326 1.655 1.326 2.73 0 1.265-.477 2.219-1.43 2.86Zm13.147-.026c1.214.59 1.82 1.577 1.82 2.964 0 1.092-.381 1.985-1.144 2.678-.745.676-1.811 1.014-3.198 1.014h-6.838V75h6.318c1.37 0 2.427.338 3.172 1.014.763.676 1.144 1.56 1.144 2.652 0 1.144-.424 2.037-1.274 2.678Zm-3.354-3.588h-2.86v2.34h2.86c.954 0 1.43-.39 1.43-1.17 0-.78-.476-1.17-1.43-1.17Zm.442 7.41c.971 0 1.456-.416 1.456-1.248 0-.364-.13-.65-.39-.858-.26-.208-.615-.312-1.066-.312h-3.302v2.418h3.302Zm17.608 1.222c-1.335 1.317-2.964 1.976-4.888 1.976s-3.554-.659-4.888-1.976c-1.318-1.335-1.976-2.964-1.976-4.888s.658-3.545 1.976-4.862c1.334-1.335 2.964-2.002 4.888-2.002s3.553.667 4.888 2.002c1.334 1.317 2.002 2.938 2.002 4.862s-.668 3.553-2.002 4.888Zm-7.41-2.314c.676.676 1.516 1.014 2.522 1.014 1.005 0 1.846-.338 2.522-1.014.676-.676 1.014-1.534 1.014-2.574 0-1.04-.338-1.898-1.014-2.574-.676-.676-1.517-1.014-2.522-1.014-1.006 0-1.846.338-2.522 1.014-.659.676-.988 1.534-.988 2.574 0 1.04.329 1.898.988 2.574ZM218.524 75v13h-3.354v-9.776h-3.588v4.342c0 4.021-1.829 5.833-5.486 5.434v-3.146c.693.173 1.222.06 1.586-.338.364-.416.546-1.127.546-2.132V75h10.296Zm13.165 0v13h-3.276v-4.056h-1.17L224.253 88h-3.874l3.25-4.446a4.412 4.412 0 0 1-2.002-1.638 4.476 4.476 0 0 1-.728-2.444c0-1.213.434-2.262 1.3-3.146.867-.884 2.002-1.326 3.406-1.326h6.084Zm-5.824 2.99c-.485 0-.892.147-1.222.442-.312.277-.468.659-.468 1.144 0 .468.156.84.468 1.118.33.277.737.416 1.222.416h2.548v-3.12h-2.548ZM244.69 75v3.224h-4.056V88h-3.354v-9.776h-4.108V75h11.518ZM13.416 106v13h-3.354v-9.854H4.888V119H1.534v-13h11.882Zm13.85 11.388c-1.336 1.317-2.965 1.976-4.889 1.976-1.924 0-3.553-.659-4.888-1.976-1.317-1.335-1.976-2.964-1.976-4.888s.659-3.545 1.976-4.862c1.335-1.335 2.964-2.002 4.888-2.002s3.553.667 4.888 2.002c1.335 1.317 2.002 2.938 2.002 4.862s-.667 3.553-2.002 4.888Zm-7.41-2.314c.675.676 1.516 1.014 2.521 1.014s1.846-.338 2.522-1.014c.676-.676 1.014-1.534 1.014-2.574 0-1.04-.338-1.898-1.014-2.574-.676-.676-1.517-1.014-2.522-1.014s-1.846.338-2.522 1.014c-.659.676-.988 1.534-.988 2.574 0 1.04.33 1.898.988 2.574Zm22.663.78h1.716v6.63h-3.276V119h-8.06v3.484h-3.276v-6.63h1.586c.745-1.109 1.118-2.643 1.118-4.602V106h10.192v9.854Zm-7.722 0h4.446v-6.838h-3.64v2.236c0 1.837-.269 3.371-.806 4.602Zm16.915 3.51c-2.045 0-3.7-.659-4.966-1.976-1.248-1.317-1.872-2.99-1.872-5.018 0-2.219.33-3.926.988-5.122.659-1.213 1.985-2.314 3.978-3.302.295-.139.71-.329 1.248-.572.537-.26.901-.442 1.092-.546.208-.104.485-.26.832-.468.347-.208.59-.39.728-.546.156-.173.32-.39.494-.65a3.58 3.58 0 0 0 .416-.858l2.756 1.586c-.225 1.057-.737 1.881-1.534 2.47-.78.572-1.959 1.161-3.536 1.768-1.11.433-1.915.867-2.418 1.3a3.757 3.757 0 0 0-1.092 1.56c.97-.988 2.27-1.482 3.9-1.482 1.439 0 2.721.529 3.848 1.586 1.127 1.04 1.69 2.427 1.69 4.16 0 1.785-.607 3.25-1.82 4.394-1.196 1.144-2.773 1.716-4.732 1.716Zm-2.392-3.952c.641.589 1.43.884 2.366.884.936 0 1.707-.286 2.314-.858.607-.572.91-1.3.91-2.184 0-.884-.303-1.612-.91-2.184-.607-.589-1.387-.884-2.34-.884-.85 0-1.612.269-2.288.806-.659.537-.988 1.257-.988 2.158 0 .919.312 1.673.936 2.262Zm18.248-9.776c1.75 0 3.241.667 4.472 2.002 1.248 1.317 1.872 2.938 1.872 4.862s-.624 3.553-1.872 4.888c-1.23 1.317-2.721 1.976-4.472 1.976-1.82 0-3.224-.633-4.212-1.898v6.734h-3.354V106h3.354v1.534c.988-1.265 2.392-1.898 4.212-1.898Zm-3.198 9.516c.676.676 1.534 1.014 2.574 1.014 1.04 0 1.898-.338 2.574-1.014.693-.693 1.04-1.577 1.04-2.652 0-1.075-.347-1.95-1.04-2.626-.676-.693-1.534-1.04-2.574-1.04-1.04 0-1.898.347-2.574 1.04-.676.676-1.014 1.551-1.014 2.626s.338 1.959 1.014 2.652ZM85.857 106h3.354v13h-3.354v-1.534c-1.005 1.265-2.418 1.898-4.238 1.898-1.733 0-3.224-.659-4.472-1.976-1.23-1.335-1.846-2.964-1.846-4.888s.616-3.545 1.846-4.862c1.248-1.335 2.739-2.002 4.472-2.002 1.82 0 3.233.633 4.238 1.898V106Zm-6.188 9.152c.676.676 1.534 1.014 2.574 1.014 1.04 0 1.898-.338 2.574-1.014.694-.693 1.04-1.577 1.04-2.652 0-1.075-.346-1.95-1.04-2.626-.676-.693-1.534-1.04-2.574-1.04-1.04 0-1.898.347-2.574 1.04-.676.676-1.014 1.551-1.014 2.626s.338 1.959 1.014 2.652ZM102.197 106v3.224h-4.056V119h-3.354v-9.776h-4.108V106h11.518Zm7.367 4.16c1.473 0 2.661.407 3.562 1.222.901.797 1.352 1.863 1.352 3.198s-.451 2.409-1.352 3.224c-.901.797-2.089 1.196-3.562 1.196h-5.876v-13h3.354v4.16h2.522Zm.026 5.876c.468 0 .849-.13 1.144-.39.312-.277.468-.633.468-1.066 0-.433-.156-.789-.468-1.066-.295-.277-.676-.416-1.144-.416h-2.548v2.938h2.548Zm19.084 3.328c-1.958 0-3.596-.659-4.914-1.976-1.3-1.317-1.95-2.947-1.95-4.888 0-1.941.65-3.571 1.95-4.888 1.318-1.317 2.956-1.976 4.914-1.976 1.266 0 2.418.303 3.458.91s1.829 1.421 2.366 2.444l-2.886 1.69a2.92 2.92 0 0 0-1.196-1.274c-.52-.312-1.109-.468-1.768-.468-1.005 0-1.837.338-2.496 1.014-.658.659-.988 1.508-.988 2.548 0 1.023.33 1.872.988 2.548.659.659 1.491.988 2.496.988.676 0 1.274-.147 1.794-.442a2.92 2.92 0 0 0 1.196-1.274l2.912 1.664a6.606 6.606 0 0 1-2.418 2.47c-1.04.607-2.192.91-3.458.91ZM148.008 106v13h-3.354v-9.854h-5.174V119h-3.354v-13h11.882Zm5.607 7.878c.451 1.629 1.673 2.444 3.666 2.444 1.283 0 2.253-.433 2.912-1.3l2.704 1.56c-1.283 1.855-3.172 2.782-5.668 2.782-2.149 0-3.874-.65-5.174-1.95-1.3-1.3-1.95-2.938-1.95-4.914 0-1.959.641-3.588 1.924-4.888 1.283-1.317 2.929-1.976 4.94-1.976 1.907 0 3.475.659 4.706 1.976 1.248 1.317 1.872 2.947 1.872 4.888 0 .433-.043.893-.13 1.378h-9.802Zm-.052-2.6h6.63c-.191-.884-.589-1.543-1.196-1.976a3.335 3.335 0 0 0-2.028-.65c-.901 0-1.647.234-2.236.702-.589.451-.979 1.092-1.17 1.924Zm23.465 4.576h2.184v6.63h-3.276V119h-10.348v-13h3.354v9.854h4.732V106h3.354v9.854ZM190.416 106h2.496v13h-3.276v-7.384l-6.11 7.384h-2.496v-13h3.276v7.384l6.11-7.384Zm15.15 0h3.354v13h-3.354v-1.534c-1.006 1.265-2.418 1.898-4.238 1.898-1.734 0-3.224-.659-4.472-1.976-1.231-1.335-1.846-2.964-1.846-4.888s.615-3.545 1.846-4.862c1.248-1.335 2.738-2.002 4.472-2.002 1.82 0 3.232.633 4.238 1.898V106Zm-6.188 9.152c.676.676 1.534 1.014 2.574 1.014 1.04 0 1.898-.338 2.574-1.014.693-.693 1.04-1.577 1.04-2.652 0-1.075-.347-1.95-1.04-2.626-.676-.693-1.534-1.04-2.574-1.04-1.04 0-1.898.347-2.574 1.04-.676.676-1.014 1.551-1.014 2.626s.338 1.959 1.014 2.652ZM222.815 106v13h-3.354v-9.776h-3.588v4.342c0 4.021-1.829 5.833-5.486 5.434v-3.146c.693.173 1.222.061 1.586-.338.364-.416.546-1.127.546-2.132V106h10.296Zm8.615 4.16c1.474 0 2.661.407 3.562 1.222.902.797 1.352 1.863 1.352 3.198s-.45 2.409-1.352 3.224c-.901.797-2.088 1.196-3.562 1.196h-5.876v-13h3.354v4.16h2.522Zm.026 5.876c.468 0 .85-.13 1.144-.39.312-.277.468-.633.468-1.066 0-.433-.156-.789-.468-1.066-.294-.277-.676-.416-1.144-.416h-2.548v2.938h2.548ZM246.681 106h3.354v13h-3.354v-4.94h-5.174V119h-3.354v-13h3.354v4.914h5.174V106Zm17.203 11.388c-1.335 1.317-2.964 1.976-4.888 1.976s-3.553-.659-4.888-1.976c-1.317-1.335-1.976-2.964-1.976-4.888s.659-3.545 1.976-4.862c1.335-1.335 2.964-2.002 4.888-2.002s3.553.667 4.888 2.002c1.335 1.317 2.002 2.938 2.002 4.862s-.667 3.553-2.002 4.888Zm-7.41-2.314c.676.676 1.517 1.014 2.522 1.014s1.846-.338 2.522-1.014c.676-.676 1.014-1.534 1.014-2.574 0-1.04-.338-1.898-1.014-2.574-.676-.676-1.517-1.014-2.522-1.014s-1.846.338-2.522 1.014c-.659.676-.988 1.534-.988 2.574 0 1.04.329 1.898.988 2.574Zm29.371.78h1.716v6.63h-3.276V119h-8.06v3.484h-3.276v-6.63h1.586c.746-1.109 1.118-2.643 1.118-4.602V106h10.192v9.854Zm-7.722 0h4.446v-6.838h-3.64v2.236c0 1.837-.268 3.371-.806 4.602ZM300.538 106v13h-3.354v-9.776h-3.588v4.342c0 4.021-1.828 5.833-5.486 5.434v-3.146c.694.173 1.222.061 1.586-.338.364-.416.546-1.127.546-2.132V106h10.296Zm13.166 0v13h-3.276v-4.056h-1.17l-2.99 4.056h-3.874l3.25-4.446a4.41 4.41 0 0 1-2.002-1.638 4.467 4.467 0 0 1-.728-2.444c0-1.213.433-2.262 1.3-3.146.866-.884 2.002-1.326 3.406-1.326h6.084Zm-5.824 2.99c-.486 0-.893.147-1.222.442-.312.277-.468.659-.468 1.144 0 .468.156.841.468 1.118.329.277.736.416 1.222.416h2.548v-3.12h-2.548ZM12.688 140.562c1.595.919 2.392 2.305 2.392 4.16 0 1.543-.546 2.808-1.638 3.796-1.092.988-2.435 1.482-4.03 1.482H1.69v-18.2h7.176c1.56 0 2.869.485 3.926 1.456 1.075.953 1.612 2.175 1.612 3.666 0 1.508-.572 2.721-1.716 3.64Zm-3.822-5.408H5.278v4.004h3.588c.555 0 1.014-.191 1.378-.572.381-.381.572-.858.572-1.43s-.182-1.049-.546-1.43c-.364-.381-.832-.572-1.404-.572Zm.546 11.492c.607 0 1.11-.199 1.508-.598.399-.416.598-.936.598-1.56 0-.607-.2-1.109-.598-1.508-.399-.416-.901-.624-1.508-.624H5.278v4.29h4.134ZM27.059 137h3.354v13H27.06v-1.534c-1.005 1.265-2.418 1.898-4.238 1.898-1.733 0-3.224-.659-4.472-1.976-1.23-1.335-1.846-2.964-1.846-4.888s.616-3.545 1.846-4.862c1.248-1.335 2.739-2.002 4.472-2.002 1.82 0 3.233.633 4.238 1.898V137Zm-6.188 9.152c.676.676 1.534 1.014 2.574 1.014 1.04 0 1.898-.338 2.574-1.014.694-.693 1.04-1.577 1.04-2.652 0-1.075-.346-1.95-1.04-2.626-.676-.693-1.534-1.04-2.574-1.04-1.04 0-1.898.347-2.574 1.04-.676.676-1.014 1.551-1.014 2.626s.338 1.959 1.014 2.652Zm18.472 4.212c-1.959 0-3.597-.659-4.914-1.976-1.3-1.317-1.95-2.947-1.95-4.888 0-1.941.65-3.571 1.95-4.888 1.317-1.317 2.955-1.976 4.914-1.976 1.265 0 2.418.303 3.458.91s1.828 1.421 2.366 2.444l-2.886 1.69a2.924 2.924 0 0 0-1.196-1.274c-.52-.312-1.11-.468-1.768-.468-1.006 0-1.838.338-2.496 1.014-.659.659-.988 1.508-.988 2.548 0 1.023.329 1.872.988 2.548.658.659 1.49.988 2.496.988.676 0 1.274-.147 1.794-.442a2.924 2.924 0 0 0 1.196-1.274l2.912 1.664a6.606 6.606 0 0 1-2.418 2.47c-1.04.607-2.193.91-3.458.91ZM64.876 137v13h-3.354v-9.854h-5.174V150h-3.354v-13h11.882Zm10.34-.364c1.75 0 3.24.667 4.471 2.002 1.248 1.317 1.872 2.938 1.872 4.862s-.624 3.553-1.872 4.888c-1.23 1.317-2.721 1.976-4.472 1.976-1.82 0-3.224-.633-4.212-1.898v6.734H67.65V137h3.354v1.534c.988-1.265 2.392-1.898 4.212-1.898Zm-3.199 9.516c.676.676 1.534 1.014 2.574 1.014 1.04 0 1.898-.338 2.574-1.014.694-.693 1.04-1.577 1.04-2.652 0-1.075-.346-1.95-1.04-2.626-.676-.693-1.534-1.04-2.574-1.04-1.04 0-1.898.347-2.574 1.04-.676.676-1.014 1.551-1.014 2.626s.338 1.959 1.014 2.652Zm22.684 2.236c-1.335 1.317-2.964 1.976-4.888 1.976s-3.554-.659-4.888-1.976c-1.318-1.335-1.976-2.964-1.976-4.888s.658-3.545 1.976-4.862c1.334-1.335 2.964-2.002 4.888-2.002s3.553.667 4.888 2.002c1.334 1.317 2.002 2.938 2.002 4.862s-.668 3.553-2.002 4.888Zm-7.41-2.314c.676.676 1.516 1.014 2.522 1.014 1.005 0 1.846-.338 2.522-1.014.676-.676 1.014-1.534 1.014-2.574 0-1.04-.338-1.898-1.014-2.574-.676-.676-1.517-1.014-2.522-1.014-1.006 0-1.846.338-2.522 1.014-.659.676-.988 1.534-.988 2.574 0 1.04.329 1.898.988 2.574ZM107.654 137v3.224h-5.538V150h-3.354v-13h8.892Zm9.064-.364c1.75 0 3.241.667 4.472 2.002 1.248 1.317 1.872 2.938 1.872 4.862s-.624 3.553-1.872 4.888c-1.231 1.317-2.722 1.976-4.472 1.976-1.82 0-3.224-.633-4.212-1.898v6.734h-3.354V137h3.354v1.534c.988-1.265 2.392-1.898 4.212-1.898Zm-3.198 9.516c.676.676 1.534 1.014 2.574 1.014 1.04 0 1.898-.338 2.574-1.014.693-.693 1.04-1.577 1.04-2.652 0-1.075-.347-1.95-1.04-2.626-.676-.693-1.534-1.04-2.574-1.04-1.04 0-1.898.347-2.574 1.04-.676.676-1.014 1.551-1.014 2.626s.338 1.959 1.014 2.652ZM135.007 137h3.354v13h-3.354v-1.534c-1.005 1.265-2.418 1.898-4.238 1.898-1.733 0-3.224-.659-4.472-1.976-1.231-1.335-1.846-2.964-1.846-4.888s.615-3.545 1.846-4.862c1.248-1.335 2.739-2.002 4.472-2.002 1.82 0 3.233.633 4.238 1.898V137Zm-6.188 9.152c.676.676 1.534 1.014 2.574 1.014 1.04 0 1.898-.338 2.574-1.014.693-.693 1.04-1.577 1.04-2.652 0-1.075-.347-1.95-1.04-2.626-.676-.693-1.534-1.04-2.574-1.04-1.04 0-1.898.347-2.574 1.04-.676.676-1.014 1.551-1.014 2.626s.338 1.959 1.014 2.652ZM154.622 137v13h-3.25v-7.592l-3.302 5.2h-.416l-3.328-5.252V150h-3.224v-13h3.302l3.458 5.46 3.458-5.46h3.302Zm16.28 0v13h-3.25v-7.592l-3.302 5.2h-.416l-3.328-5.252V150h-3.224v-13h3.302l3.458 5.46L167.6 137h3.302Zm11.237 0h3.588l-4.732 13c-1.318 3.657-3.606 5.391-6.864 5.2v-3.12c.884.017 1.577-.147 2.08-.494.52-.347.936-.927 1.248-1.742L172.207 137h3.562l3.484 8.736 2.886-8.736Zm21.328 0v3.224h-4.056V150h-3.354v-9.776h-4.108V137h11.518Zm9.057-.364c1.75 0 3.241.667 4.472 2.002 1.248 1.317 1.872 2.938 1.872 4.862s-.624 3.553-1.872 4.888c-1.231 1.317-2.722 1.976-4.472 1.976-1.82 0-3.224-.633-4.212-1.898v6.734h-3.354V137h3.354v1.534c.988-1.265 2.392-1.898 4.212-1.898Zm-3.198 9.516c.676.676 1.534 1.014 2.574 1.014 1.04 0 1.898-.338 2.574-1.014.693-.693 1.04-1.577 1.04-2.652 0-1.075-.347-1.95-1.04-2.626-.676-.693-1.534-1.04-2.574-1.04-1.04 0-1.898.347-2.574 1.04-.676.676-1.014 1.551-1.014 2.626s.338 1.959 1.014 2.652Zm14.441-1.274c.451 1.629 1.673 2.444 3.666 2.444 1.283 0 2.254-.433 2.912-1.3l2.704 1.56c-1.282 1.855-3.172 2.782-5.668 2.782-2.149 0-3.874-.65-5.174-1.95-1.3-1.3-1.95-2.938-1.95-4.914 0-1.959.642-3.588 1.924-4.888 1.283-1.317 2.93-1.976 4.94-1.976 1.907 0 3.476.659 4.706 1.976 1.248 1.317 1.872 2.947 1.872 4.888 0 .433-.043.893-.13 1.378h-9.802Zm-.052-2.6h6.63c-.19-.884-.589-1.543-1.196-1.976a3.335 3.335 0 0 0-2.028-.65c-.901 0-1.646.234-2.236.702-.589.451-.979 1.092-1.17 1.924ZM244.269 137h3.354v13h-3.354v-4.94h-5.174V150h-3.354v-13h3.354v4.914h5.174V137Zm15.513 0h2.496v13h-3.276v-7.384l-6.11 7.384h-2.496v-13h3.276v7.384l6.11-7.384Zm12.835-.364c1.75 0 3.241.667 4.472 2.002 1.248 1.317 1.872 2.938 1.872 4.862s-.624 3.553-1.872 4.888c-1.231 1.317-2.722 1.976-4.472 1.976-1.82 0-3.224-.633-4.212-1.898v6.734h-3.354V137h3.354v1.534c.988-1.265 2.392-1.898 4.212-1.898Zm-3.198 9.516c.676.676 1.534 1.014 2.574 1.014 1.04 0 1.898-.338 2.574-1.014.693-.693 1.04-1.577 1.04-2.652 0-1.075-.347-1.95-1.04-2.626-.676-.693-1.534-1.04-2.574-1.04-1.04 0-1.898.347-2.574 1.04-.676.676-1.014 1.551-1.014 2.626s.338 1.959 1.014 2.652Zm22.683 2.236c-1.334 1.317-2.964 1.976-4.888 1.976s-3.553-.659-4.888-1.976c-1.317-1.335-1.976-2.964-1.976-4.888s.659-3.545 1.976-4.862c1.335-1.335 2.964-2.002 4.888-2.002s3.554.667 4.888 2.002c1.335 1.317 2.002 2.938 2.002 4.862s-.667 3.553-2.002 4.888Zm-7.41-2.314c.676.676 1.517 1.014 2.522 1.014 1.006 0 1.846-.338 2.522-1.014.676-.676 1.014-1.534 1.014-2.574 0-1.04-.338-1.898-1.014-2.574-.676-.676-1.516-1.014-2.522-1.014-1.005 0-1.846.338-2.522 1.014-.658.676-.988 1.534-.988 2.574 0 1.04.33 1.898.988 2.574Zm20.832-2.73c1.213.589 1.82 1.577 1.82 2.964 0 1.092-.382 1.985-1.144 2.678-.746.676-1.812 1.014-3.198 1.014h-6.838v-13h6.318c1.369 0 2.426.338 3.172 1.014.762.676 1.144 1.56 1.144 2.652 0 1.144-.425 2.037-1.274 2.678Zm-3.354-3.588h-2.86v2.34h2.86c.953 0 1.43-.39 1.43-1.17 0-.78-.477-1.17-1.43-1.17Zm.442 7.41c.97 0 1.456-.416 1.456-1.248 0-.364-.13-.65-.39-.858-.26-.208-.616-.312-1.066-.312h-3.302v2.418h3.302Zm17.607 1.222c-1.335 1.317-2.964 1.976-4.888 1.976s-3.553-.659-4.888-1.976c-1.317-1.335-1.976-2.964-1.976-4.888s.659-3.545 1.976-4.862c1.335-1.335 2.964-2.002 4.888-2.002s3.553.667 4.888 2.002c1.335 1.317 2.002 2.938 2.002 4.862s-.667 3.553-2.002 4.888Zm-7.41-2.314c.676.676 1.517 1.014 2.522 1.014s1.846-.338 2.522-1.014c.676-.676 1.014-1.534 1.014-2.574 0-1.04-.338-1.898-1.014-2.574-.676-.676-1.517-1.014-2.522-1.014s-1.846.338-2.522 1.014c-.659.676-.988 1.534-.988 2.574 0 1.04.329 1.898.988 2.574ZM336.266 150h-3.9l-4.732-5.902V150h-3.354v-13h3.354v5.72l4.472-5.72h4.004l-5.226 6.422 5.382 6.578Zm16.961-13h2.496v13h-3.276v-7.384l-6.11 7.384h-2.496v-13h3.276v7.384l6.11-7.384ZM13.416 168v13h-3.354v-9.854H4.888V181H1.534v-13h11.882Zm12.16 0h2.495v13h-3.276v-7.384L18.685 181H16.19v-13h3.276v7.384l6.11-7.384Zm15.512 0v3.224h-4.056V181h-3.354v-9.776H29.57V168h11.518Zm10.864 0h3.354v13h-3.354v-1.534c-1.006 1.265-2.419 1.898-4.238 1.898-1.734 0-3.224-.659-4.472-1.976-1.231-1.335-1.846-2.964-1.846-4.888s.615-3.545 1.846-4.862c1.248-1.335 2.738-2.002 4.472-2.002 1.82 0 3.232.633 4.238 1.898V168Zm-6.188 9.152c.675.676 1.533 1.014 2.573 1.014s1.898-.338 2.574-1.014c.694-.693 1.04-1.577 1.04-2.652 0-1.075-.346-1.95-1.04-2.626-.675-.693-1.534-1.04-2.574-1.04-1.04 0-1.898.347-2.574 1.04-.675.676-1.014 1.551-1.014 2.626s.338 1.959 1.014 2.652ZM66.573 168h3.355v13h-3.354v-4.94H61.4V181h-3.354v-13H61.4v4.914h5.174V168Zm15.514 0h2.496v13h-3.276v-7.384L75.198 181h-2.496v-13h3.276v7.384l6.11-7.384Zm15.695 0v13h-3.276v-4.056h-1.17L90.347 181h-3.874l3.25-4.446a4.415 4.415 0 0 1-2.002-1.638 4.473 4.473 0 0 1-.728-2.444c0-1.213.433-2.262 1.3-3.146.867-.884 2.002-1.326 3.406-1.326h6.084Zm-5.824 2.99c-.485 0-.893.147-1.222.442-.312.277-.468.659-.468 1.144 0 .468.156.841.468 1.118.33.277.737.416 1.222.416h2.548v-3.12h-2.548Z"
      fill="#333"
    />
    <Path
      d="M12.94 1H14v14h-1.06V8.3H4.8V15H3.74V1H4.8v6.3h8.14V1Zm8.53 3.78c1.467 0 2.654.52 3.56 1.56.92 1.04 1.38 2.273 1.38 3.7 0 .053-.006.133-.02.24v.24h-9.06c.12 1.12.567 2.027 1.34 2.72.787.68 1.754 1.02 2.9 1.02.8 0 1.5-.167 2.1-.5.6-.333 1.054-.773 1.36-1.32l.88.52c-.413.693-1 1.247-1.76 1.66-.76.4-1.626.6-2.6.6-1.533 0-2.793-.487-3.78-1.46-.986-.987-1.48-2.24-1.48-3.76 0-1.493.48-2.733 1.44-3.72.974-1 2.22-1.5 3.74-1.5Zm0 .96c-1.133 0-2.08.353-2.84 1.06-.76.707-1.193 1.62-1.3 2.74h8.04c-.106-1.187-.533-2.113-1.28-2.78-.733-.68-1.606-1.02-2.62-1.02ZM38.109 5v10h-1.02V6.52l-3.74 5.9h-.14l-3.76-5.94V15h-1V5h1.18l3.64 5.74L36.908 5h1.2Zm10.014 0h1.02v10h-1.02v-4.52h-6.24V15h-1V5h1v4.52h6.24V5Zm8.388 10.22c-1.467 0-2.713-.5-3.74-1.5-1.014-1.013-1.52-2.253-1.52-3.72s.507-2.7 1.52-3.7c1.026-1.013 2.273-1.52 3.74-1.52 1.453 0 2.687.507 3.7 1.52 1.026 1 1.54 2.233 1.54 3.7s-.514 2.707-1.54 3.72c-1.014 1-2.247 1.5-3.7 1.5Zm-3.02-2.2c.826.827 1.833 1.24 3.02 1.24s2.187-.413 3-1.24c.813-.827 1.22-1.833 1.22-3.02s-.407-2.193-1.22-3.02-1.813-1.24-3-1.24-2.194.413-3.02 1.24c-.814.827-1.22 1.833-1.22 3.02s.406 2.193 1.22 3.02ZM70.116 5v.98h-5.26V15h-1V5h6.26Zm5.677 10.22c-1.467 0-2.714-.5-3.74-1.5-1.014-1.013-1.52-2.253-1.52-3.72s.506-2.7 1.52-3.7c1.026-1.013 2.273-1.52 3.74-1.52 1.453 0 2.686.507 3.7 1.52 1.026 1 1.54 2.233 1.54 3.7s-.514 2.707-1.54 3.72c-1.014 1-2.247 1.5-3.7 1.5Zm-3.02-2.2c.826.827 1.833 1.24 3.02 1.24 1.186 0 2.186-.413 3-1.24.813-.827 1.22-1.833 1.22-3.02s-.407-2.193-1.22-3.02c-.814-.827-1.814-1.24-3-1.24-1.187 0-2.194.413-3.02 1.24-.814.827-1.22 1.833-1.22 3.02s.406 2.193 1.22 3.02Zm19.978 2.2c-1.466 0-2.713-.5-3.74-1.5-1.013-1.013-1.52-2.253-1.52-3.72s.507-2.7 1.52-3.7c1.027-1.013 2.274-1.52 3.74-1.52 1.454 0 2.687.507 3.7 1.52 1.027 1 1.54 2.233 1.54 3.7s-.513 2.707-1.54 3.72c-1.013 1-2.246 1.5-3.7 1.5Zm-3.02-2.2c.827.827 1.834 1.24 3.02 1.24 1.187 0 2.187-.413 3-1.24.814-.827 1.22-1.833 1.22-3.02s-.406-2.193-1.22-3.02c-.813-.827-1.813-1.24-3-1.24-1.186 0-2.193.413-3.02 1.24-.813.827-1.22 1.833-1.22 3.02s.407 2.193 1.22 3.02Zm19.979 2.2c-1.507 0-2.76-.5-3.76-1.5s-1.5-2.24-1.5-3.72.5-2.72 1.5-3.72 2.253-1.5 3.76-1.5c.973 0 1.853.233 2.64.7.787.453 1.36 1.073 1.72 1.86l-.82.48a3.347 3.347 0 0 0-1.4-1.52c-.627-.373-1.34-.56-2.14-.56-1.2 0-2.207.413-3.02 1.24-.813.813-1.22 1.82-1.22 3.02s.407 2.213 1.22 3.04c.813.813 1.82 1.22 3.02 1.22.8 0 1.513-.187 2.14-.56a3.722 3.722 0 0 0 1.46-1.52l.84.5c-.4.773-1 1.393-1.8 1.86-.787.453-1.667.68-2.64.68Zm10.733-10.44c1.467 0 2.653.52 3.56 1.56.92 1.04 1.38 2.273 1.38 3.7 0 .053-.007.133-.02.24v.24h-9.06c.12 1.12.567 2.027 1.34 2.72.787.68 1.753 1.02 2.9 1.02.8 0 1.5-.167 2.1-.5.6-.333 1.053-.773 1.36-1.32l.88.52c-.413.693-1 1.247-1.76 1.66-.76.4-1.627.6-2.6.6-1.533 0-2.793-.487-3.78-1.46-.987-.987-1.48-2.24-1.48-3.76 0-1.493.48-2.733 1.44-3.72.973-1 2.22-1.5 3.74-1.5Zm0 .96c-1.133 0-2.08.353-2.84 1.06-.76.707-1.193 1.62-1.3 2.74h8.04c-.107-1.187-.533-2.113-1.28-2.78-.733-.68-1.607-1.02-2.62-1.02Zm11.337 9.5c-1.44 0-2.64-.473-3.6-1.42-.96-.96-1.44-2.2-1.44-3.72 0-1.667.24-2.953.72-3.86.494-.92 1.5-1.753 3.02-2.5.294-.133.64-.287 1.04-.46.4-.173.72-.307.96-.4.254-.107.52-.233.8-.38.294-.16.527-.313.7-.46.174-.147.327-.327.46-.54.134-.227.22-.48.26-.76l.8.46c-.066.373-.193.7-.38.98-.173.28-.44.54-.8.78a9.31 9.31 0 0 1-.92.54c-.253.133-.653.313-1.2.54-.546.227-.94.393-1.18.5-.986.44-1.713.92-2.18 1.44-.453.52-.76 1.22-.92 2.1a4.397 4.397 0 0 1 1.82-1.64c.747-.36 1.5-.54 2.26-.54 1.334 0 2.44.44 3.32 1.32.88.88 1.32 2 1.32 3.36 0 1.347-.46 2.46-1.38 3.34-.906.88-2.066 1.32-3.48 1.32Zm0-1c1.12 0 2.04-.34 2.76-1.02.72-.693 1.08-1.573 1.08-2.64 0-1.08-.346-1.967-1.04-2.66-.693-.693-1.593-1.04-2.7-1.04-1.013 0-1.926.32-2.74.96-.8.64-1.24 1.467-1.32 2.48 0 1.147.374 2.087 1.12 2.82.747.733 1.694 1.1 2.84 1.1Zm11.266-9.46c1.467 0 2.654.52 3.56 1.56.92 1.04 1.38 2.273 1.38 3.7 0 .053-.006.133-.02.24v.24h-9.06c.12 1.12.567 2.027 1.34 2.72.787.68 1.754 1.02 2.9 1.02.8 0 1.5-.167 2.1-.5.6-.333 1.054-.773 1.36-1.32l.88.52c-.413.693-1 1.247-1.76 1.66-.76.4-1.626.6-2.6.6-1.533 0-2.793-.487-3.78-1.46-.986-.987-1.48-2.24-1.48-3.76 0-1.493.48-2.733 1.44-3.72.974-1 2.22-1.5 3.74-1.5Zm0 .96c-1.133 0-2.08.353-2.84 1.06-.76.707-1.193 1.62-1.3 2.74h8.04c-.106-1.187-.533-2.113-1.28-2.78-.733-.68-1.606-1.02-2.62-1.02Z"
      fill="#828282"
    />
  </Svg>
);

export default SvgComponent;
