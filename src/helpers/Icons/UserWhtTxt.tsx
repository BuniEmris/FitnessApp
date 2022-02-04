import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const SvgComponent = (props: SvgProps) => (
  <Svg width={294} height={75} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M25.344.4v6.336h-9.072V34H9.648V6.736H.624V.4h24.72Zm4.282 24.144c.832 3.008 3.088 4.512 6.768 4.512 2.369 0 4.16-.8 5.377-2.4l4.992 2.88c-2.368 3.424-5.856 5.136-10.465 5.136-3.968 0-7.152-1.2-9.552-3.6-2.4-2.4-3.6-5.424-3.6-9.072 0-3.616 1.184-6.624 3.552-9.024 2.369-2.432 5.408-3.648 9.12-3.648 3.52 0 6.416 1.216 8.689 3.648 2.303 2.432 3.456 5.44 3.456 9.024 0 .8-.08 1.648-.24 2.544H29.626Zm-.096-4.8h12.24c-.352-1.632-1.088-2.848-2.208-3.648-1.087-.8-2.335-1.2-3.743-1.2-1.665 0-3.04.432-4.129 1.296-1.088.832-1.808 2.016-2.16 3.552ZM74.413 34h-7.2l-8.736-10.896V34h-6.192V10h6.192v10.56L66.733 10h7.392l-9.648 11.856L74.413 34Zm18.505-24h6.623l-8.736 24c-2.431 6.752-6.656 9.952-12.672 9.6v-5.76c1.633.032 2.913-.272 3.84-.912.96-.64 1.728-1.712 2.305-3.216L74.58 10h6.576l6.433 16.128L92.918 10Zm43.17 18.192h3.168v12.24h-6.048V34h-30.72V10h6.192v18.192h7.488V10h6.192v18.192h7.536V10h6.192v18.192ZM160.504 10h4.608v24h-6.048V20.368L147.784 34h-4.608V10h6.048v13.632L160.504 10Zm14.313-3.072V1.552h13.92v5.376h-13.92ZM188.113 10h4.608v24h-6.048V20.368L175.393 34h-4.608V10h6.048v13.632L188.113 10Zm39.562 11.712c2.24 1.088 3.36 2.912 3.36 5.472 0 2.016-.704 3.664-2.112 4.944-1.376 1.248-3.344 1.872-5.904 1.872h-12.624V10h11.664c2.528 0 4.48.624 5.856 1.872 1.408 1.248 2.112 2.88 2.112 4.896 0 2.112-.784 3.76-2.352 4.944Zm-6.192-6.624h-5.28v4.32h5.28c1.76 0 2.64-.72 2.64-2.16 0-1.44-.88-2.16-2.64-2.16Zm.816 13.68c1.792 0 2.688-.768 2.688-2.304 0-.672-.24-1.2-.72-1.584-.48-.384-1.136-.576-1.968-.576h-6.096v4.464h6.096Zm17.843-4.224c.832 3.008 3.088 4.512 6.768 4.512 2.368 0 4.16-.8 5.376-2.4l4.992 2.88c-2.368 3.424-5.856 5.136-10.464 5.136-3.968 0-7.152-1.2-9.552-3.6-2.4-2.4-3.6-5.424-3.6-9.072 0-3.616 1.184-6.624 3.552-9.024 2.368-2.432 5.408-3.648 9.12-3.648 3.52 0 6.416 1.216 8.688 3.648 2.304 2.432 3.456 5.44 3.456 9.024 0 .8-.08 1.648-.24 2.544h-18.096Zm-.096-4.8h12.24c-.352-1.632-1.088-2.848-2.208-3.648-1.088-.8-2.336-1.2-3.744-1.2-1.664 0-3.04.432-4.128 1.296-1.088.832-1.808 2.016-2.16 3.552Zm33.991 14.928c-3.616 0-6.64-1.216-9.072-3.648-2.4-2.432-3.6-5.44-3.6-9.024 0-3.584 1.2-6.592 3.6-9.024 2.432-2.432 5.456-3.648 9.072-3.648 2.336 0 4.464.56 6.384 1.68 1.92 1.12 3.376 2.624 4.368 4.512l-5.328 3.12c-.48-.992-1.216-1.776-2.208-2.352-.96-.576-2.048-.864-3.264-.864-1.856 0-3.392.624-4.608 1.872-1.216 1.216-1.824 2.784-1.824 4.704 0 1.888.608 3.456 1.824 4.704 1.216 1.216 2.752 1.824 4.608 1.824 1.248 0 2.352-.272 3.312-.816.992-.576 1.728-1.36 2.208-2.352l5.376 3.072c-1.056 1.888-2.544 3.408-4.464 4.56-1.92 1.12-4.048 1.68-6.384 1.68Z"
      fill="#000"
    />
    <Path
      d="M11.424 53.2h2.256l-5.4 12.816c-.608 1.44-1.384 2.488-2.328 3.144-.944.64-2.096.92-3.456.84v-2.064c.928.096 1.68-.04 2.256-.408.576-.368 1.056-1 1.44-1.896l.168-.384L.672 53.2h2.256l4.464 9.6 4.032-9.6ZM24.908 70h-2.592l-5.472-5.688V70h-2.088V58h2.088v5.304L22.028 58h2.688l-5.736 5.808L24.908 70Zm10.776-12h2.088v12h-2.088v-2.064c-1.04 1.584-2.552 2.376-4.536 2.376-1.68 0-3.112-.608-4.296-1.824-1.184-1.232-1.776-2.728-1.776-4.488 0-1.76.592-3.248 1.776-4.464 1.184-1.232 2.616-1.848 4.296-1.848 1.984 0 3.496.792 4.536 2.376V58Zm-4.272 10.296c1.216 0 2.232-.408 3.048-1.224.816-.832 1.224-1.856 1.224-3.072s-.408-2.232-1.224-3.048c-.816-.832-1.832-1.248-3.048-1.248-1.2 0-2.208.416-3.024 1.248-.816.816-1.224 1.832-1.224 3.048s.408 2.24 1.224 3.072c.816.816 1.824 1.224 3.024 1.224ZM55.696 70h-2.448l-4.488-5.688V70h-2.064v-5.688L42.208 70h-2.424l5.016-6.192L40.024 58h2.424l4.248 5.304V58h2.064v5.304L53.008 58h2.448l-4.8 5.808L55.696 70Zm10.71-12h1.68v12H66.02v-8.424L59.373 70h-1.68V58h2.064v8.424L66.405 58Zm13.786 0v2.016h-4.08V70h-2.088v-9.984H69.92V58h10.272Zm2.825 6.96c.208 1.072.696 1.904 1.464 2.496.784.592 1.744.888 2.88.888 1.584 0 2.736-.584 3.456-1.752l1.776 1.008c-1.168 1.808-2.928 2.712-5.28 2.712-1.904 0-3.456-.592-4.656-1.776-1.184-1.2-1.776-2.712-1.776-4.536 0-1.808.584-3.312 1.752-4.512 1.168-1.2 2.68-1.8 4.536-1.8 1.76 0 3.192.624 4.296 1.872 1.12 1.232 1.68 2.72 1.68 4.464 0 .304-.024.616-.072.936H83.017Zm4.152-5.304c-1.12 0-2.048.32-2.784.96-.736.624-1.192 1.464-1.368 2.52h8.016c-.176-1.136-.624-2-1.344-2.592-.72-.592-1.56-.888-2.52-.888Zm22.368 4.176c1.232.512 1.848 1.44 1.848 2.784 0 .992-.336 1.808-1.008 2.448-.656.624-1.6.936-2.832.936h-6V58h5.52c1.2 0 2.128.304 2.784.912.656.592.984 1.376.984 2.352 0 1.152-.432 2.008-1.296 2.568Zm-2.568-3.96h-3.384v3.144h3.384c1.216 0 1.824-.536 1.824-1.608 0-1.024-.608-1.536-1.824-1.536Zm.456 8.232c.608 0 1.072-.144 1.392-.432.336-.288.504-.696.504-1.224 0-.496-.168-.88-.504-1.152-.32-.288-.784-.432-1.392-.432h-3.84v3.24h3.84ZM123.575 58h2.088v12h-2.088v-2.064c-1.04 1.584-2.552 2.376-4.536 2.376-1.68 0-3.112-.608-4.296-1.824-1.184-1.232-1.776-2.728-1.776-4.488 0-1.76.592-3.248 1.776-4.464 1.184-1.232 2.616-1.848 4.296-1.848 1.984 0 3.496.792 4.536 2.376V58Zm-4.272 10.296c1.216 0 2.232-.408 3.048-1.224.816-.832 1.224-1.856 1.224-3.072s-.408-2.232-1.224-3.048c-.816-.832-1.832-1.248-3.048-1.248-1.2 0-2.208.416-3.024 1.248-.816.816-1.224 1.832-1.224 3.048s.408 2.24 1.224 3.072c.816.816 1.824 1.224 3.024 1.224ZM143.178 58h2.088v12h-16.44V58h2.088v10.008h5.088V58h2.088v10.008h5.088V58Zm20.217 0v2.016h-4.08V70h-2.088v-9.984h-4.104V58h10.272Zm2.825 6.96c.208 1.072.696 1.904 1.464 2.496.784.592 1.744.888 2.88.888 1.584 0 2.736-.584 3.456-1.752l1.776 1.008c-1.168 1.808-2.928 2.712-5.28 2.712-1.904 0-3.456-.592-4.656-1.776-1.184-1.2-1.776-2.712-1.776-4.536 0-1.808.584-3.312 1.752-4.512 1.168-1.2 2.68-1.8 4.536-1.8 1.76 0 3.192.624 4.296 1.872 1.12 1.232 1.68 2.72 1.68 4.464 0 .304-.024.616-.072.936H166.22Zm4.152-5.304c-1.12 0-2.048.32-2.784.96-.736.624-1.192 1.464-1.368 2.52h8.016c-.176-1.136-.624-2-1.344-2.592-.72-.592-1.56-.888-2.52-.888ZM188.9 70h-2.592l-5.472-5.688V70h-2.088V58h2.088v5.304L186.02 58h2.688l-5.736 5.808L188.9 70Zm9.966-12h2.232l-4.896 12.744c-.512 1.36-1.232 2.392-2.16 3.096-.928.72-1.984 1.04-3.168.96v-1.944c1.472.112 2.552-.688 3.24-2.4l.192-.432L189.098 58h2.208l4.104 9.408L198.866 58Zm20.296 10.008h1.656v5.208h-2.064V70h-15.912V58h2.088v10.008h5.04V58h2.088v10.008h5.016V58h2.088v10.008ZM231.78 58h1.68v12h-2.064v-8.424L224.748 70h-1.68V58h2.064v8.424L231.78 58Zm6.827-1.8v-1.824h6.48V56.2h-6.48Zm6.744 1.8h1.68v12h-2.064v-8.424L238.319 70h-1.68V58h2.064v8.424L245.351 58Zm18.85 5.832c1.232.512 1.848 1.44 1.848 2.784 0 .992-.336 1.808-1.008 2.448-.656.624-1.6.936-2.832.936h-6V58h5.52c1.2 0 2.128.304 2.784.912.656.592.984 1.376.984 2.352 0 1.152-.432 2.008-1.296 2.568Zm-2.568-3.96h-3.384v3.144h3.384c1.216 0 1.824-.536 1.824-1.608 0-1.024-.608-1.536-1.824-1.536Zm.456 8.232c.608 0 1.072-.144 1.392-.432.336-.288.504-.696.504-1.224 0-.496-.168-.88-.504-1.152-.32-.288-.784-.432-1.392-.432h-3.84v3.24h3.84Zm7.678-3.144c.208 1.072.696 1.904 1.464 2.496.784.592 1.744.888 2.88.888 1.584 0 2.736-.584 3.456-1.752l1.776 1.008c-1.168 1.808-2.928 2.712-5.28 2.712-1.904 0-3.456-.592-4.656-1.776-1.184-1.2-1.776-2.712-1.776-4.536 0-1.808.584-3.312 1.752-4.512 1.168-1.2 2.68-1.8 4.536-1.8 1.76 0 3.192.624 4.296 1.872 1.12 1.232 1.68 2.72 1.68 4.464 0 .304-.024.616-.072.936h-10.056Zm4.152-5.304c-1.12 0-2.048.32-2.784.96-.736.624-1.192 1.464-1.368 2.52h8.016c-.176-1.136-.624-2-1.344-2.592-.72-.592-1.56-.888-2.52-.888Zm13.993 10.656c-1.808 0-3.312-.6-4.512-1.8-1.2-1.216-1.8-2.72-1.8-4.512 0-1.792.6-3.288 1.8-4.488 1.2-1.216 2.704-1.824 4.512-1.824 1.184 0 2.248.288 3.192.864a5.277 5.277 0 0 1 2.112 2.28l-1.752 1.008a3.537 3.537 0 0 0-1.416-1.536c-.624-.384-1.336-.576-2.136-.576-1.2 0-2.208.408-3.024 1.224-.8.816-1.2 1.832-1.2 3.048 0 1.2.4 2.208 1.2 3.024.816.816 1.824 1.224 3.024 1.224.8 0 1.52-.184 2.16-.552a3.858 3.858 0 0 0 1.464-1.536l1.776 1.032c-.512.944-1.248 1.704-2.208 2.28-.96.56-2.024.84-3.192.84Z"
      fill="#828282"
    />
  </Svg>
)

export default SvgComponent