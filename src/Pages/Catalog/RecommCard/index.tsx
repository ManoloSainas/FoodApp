// import { buttonVariants } from '../../../../../../../Shared Components/Button/styled'
// import { IconName } from '../../../../../../../Shared Components/Icon/config'
// import { IconButton } from '../../../../../../../Composite Components/IconButton'
// import { Image } from '../../../../../../../Shared Components/Image'
// import { Price } from '../../../../../../../Composite Components/Price'
// import { Stack } from '../../../../../../../Shared Components/Stack'
// import { Tag } from '../../../../../../../Composite Components/Tag'
// import { Text } from '../../../../../../../Shared Components/Text'
// import { StyledRow } from '../RecommCard/styled'
// import { useMemo } from 'react'
// import { Icon } from '../../../../../../../Shared Components/Icon'
// import { symbols } from '../../../../../../../constants'

// type Props = {
//   options: {
//     imageUrl: string
//     text: string
//     textp: string
//     tagText: string
//     currency: keyof typeof symbols
//     value: string
//     variant?: keyof typeof buttonVariants
//     iconNameOptional: IconName
//     iconNameButton: IconName
//     showIconInCorner?: boolean
//   }[]
//   onClick: () => void
// }

// export const RecommCard = ({ options, onClick }: Props) => {
//   const optionsElements = useMemo(
//     () =>
//       options.map(
//         ({
//           imageUrl,
//           text,
//           textp,
//           tagText,
//           currency,
//           value,
//           variant,
//           iconNameOptional,
//           iconNameButton,
//           showIconInCorner = false
//         }) => (
//           <StyledRow key={imageUrl}>
//             <Image className="recomm-card-image" imageUrl={imageUrl} />
//             <Stack flexDirection="column">
//               <Stack>
//                 <Text className="recomm-card-text" variant="h2">
//                   {text}
//                 </Text>
//                 {showIconInCorner && <Icon iconName={iconNameOptional} />}
//               </Stack>

//               <Text className="recomm-card-textp">{textp}</Text>
//               <Tag text={tagText} />
//               <Stack justifyContent="space-between">
//                 <Price currency={currency} value={value} />
//                 <IconButton
//                   variant={variant}
//                   iconName={iconNameButton}
//                   onClick={onClick}
//                 />
//               </Stack>
//             </Stack>
//           </StyledRow>
//         )
//       ),
//     [options, onClick]
//   )

//   return <ul>{optionsElements}</ul>
// }
